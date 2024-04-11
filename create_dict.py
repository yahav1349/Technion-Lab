import pandas as pd
import json

# check unique
def create_mapping_df(df):
    df_without_cluster_minus = df[df['cluster'] != -1]
    median_filtered = df_without_cluster_minus[df_without_cluster_minus['median'] == 1]

    # Now median_filtered contains only rows where 'median' is 1
    median_and_id = median_filtered[['job id', 'cluster', 'job title']]
    median_and_id_sorted = median_and_id.sort_values(by='job title').reset_index(drop=True)
    return median_and_id_sorted

def df_with_description(df):
    df = df[['job id', 'llm_job_desc']]
    df = df.rename(columns={'job id': 'job_id'})
    df = df.rename(columns={'llm_job_desc': 'description'})
    return df

def join_df(df1, df2):
    unwanted_list =[7, 18, 29, 35, 36, 37, 41, 46, 48, 55, 64, 68, 73, 78, 79, 81, 85, 86, 94, 96, 99, 101, 106, 110, 111, 112]
    df1 = create_mapping_df(df1)
    df2 = df_with_description(df2)
    df = pd.merge(df1, df2, left_on='job id', right_on='job_id')
    df = df.drop(columns=['job_id', 'job id'])
    df = df[~df['cluster'].isin(unwanted_list)].reset_index(drop=True)
    
    # Create a dictionary where 'job title' is the key and other columns are the values
    dict_from_df = df.set_index('job title').apply(dict, axis=1).to_dict()

    return dict_from_df


def main():
    df = pd.read_csv('jobs_clusterd_noemb.csv')
    gemini_df = pd.read_csv('gemini_job_descriptions.tsv', delimiter='\t')
    final_dict = join_df(df, gemini_df)
    # Write the dictionary to a text file
    with open('mapping.txt', 'w') as file:
        json.dump(final_dict, file)

if __name__ == '__main__':
    main()