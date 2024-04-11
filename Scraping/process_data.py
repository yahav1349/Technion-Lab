import pandas as pd

DATA_FILES_LIST = [
    "jobs_linkedin_0.csv",
    "jobs_linkedin_1.csv",
    "jobs_linkedin_2.csv",
    "jobs_linkedin_3.csv",
    "jobs_linkedin_4.csv",
    "jobs_linkedin_5.csv",
    "jobs_linkedin_6.csv",
]


def save_combined_data_files():
    df_data = pd.DataFrame()
    for file in DATA_FILES_LIST:
        relative_path = f'scraped_data/{file}'
        cur_df = pd.read_csv(relative_path, index_col=False)
        df_data = pd.concat([df_data, cur_df], ignore_index=True)

    df_data.drop_duplicates(subset=['full description'], ignore_index=True, inplace=True)
    df_data.to_csv(f"scraped_data/jobs_linkedin.csv", index=True)


if __name__ == '__main__':

    # save_combined_data_files()
    pass
