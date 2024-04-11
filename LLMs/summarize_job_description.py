import os
import textwrap
import google.generativeai as genai
import pandas as pd
from IPython.display import Markdown


def to_markdown(text):
    text = text.replace('•', '  *')
    return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))


GOOGLE_API_KEY = os.environ.get('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)


class LLMJobSummarizer:
    def __init__(self):
        self.llm = genai.GenerativeModel('gemini-pro')
        self.summarize_prompt = (
            "For the following job description, please give me a summary constructed as following: "
            "Summarize the description; list the responsibilities; list the skills required for the job."
        )

    def summarize_job(self, job_description: str, markdown: bool = True) -> str:
        constructed_prompt = self.summarize_prompt + '\n' + job_description
        llm_respond = self.prompt_llm(prompt=constructed_prompt, markdown=markdown)
        print(llm_respond)
        return llm_respond

    def prompt_llm(self, prompt: str, markdown: bool = True):
        response = self.llm.generate_content(prompt)

        if markdown:
            return self.to_markdown(response.text)
        else:
            return response.text

    @classmethod
    def to_markdown(cls, text):
        text = text.replace('•', '  *')
        return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))


if __name__ == '__main__':
    llm_job_summarizer = LLMJobSummarizer()

    # # usage example
    # job_desc = "Awesome opportunity to learn drafting/design and support HVAC Industry!Description:Roles/Responsibilities:Uses computer assisted design/drafting (AutoCAD) equipment and software to develop designs.Creates and revises production drawings.Makes final sketch of proposed drawing, checking dimension of parts, materials to be used, relation of one part to another, and relation of various parts to whole structure or project.Utilizes knowledge of various machines, engineering practices, mathematics, building materials and other physical sciences to complete drawings.Drafts detailed multi-view drawings of products.Draws finished designs from sketches.Updates Drafting and Engineering Standards.Sets up and maintain an organized file system for production drawings.Converts existing production drawings to AutoCAD Communicates with tooling, QA, engineering and manufacturing regarding new and revised prints.Gain working knowledge of carrier by learning the manufacturing process of the product.MUST:Associates Degree in CADAutoCAD experienceDrafting/Design experiencePLUS:Sheet metal experienceInventor experiencelAbout ActalentActalent is a global leader in engineering and sciences services and talent solutions. We help visionary companies advance their engineering and science initiatives through access to specialized experts who drive scale, innovation and speed to market. With a network of almost 30,000 consultants and more than 4,500 clients across the U.S., Canada, Asia and Europe, Actalent serves many of the Fortune 500.Diversity, Equity & InclusionAt Actalent, diversity and inclusion are a bridge towards the equity and success of our people. DE&I are embedded into our culture through:Hiring diverse talentMaintaining an inclusive environment through persistent self-reflectionBuilding a culture of care, engagement, and recognition with clear outcomesEnsuring growth opportunities for our peopleThe company is an equal opportunity employer and will consider all applications without regard to race, sex, age, color, religion, national origin, veteran status, disability, sexual orientation, gender identity, genetic information or any characteristic protected by law.If you would like to request a reasonable accommodation, such as the modification or adjustment of the job application process or interviewing process due to a disability, please email actalentaccommodation@actalentservices.com for other accommodation options."
    # job_summary = llm_job_summarizer.summarize_job(job_description=job_desc)

    df_centroids = pd.read_csv('jobs_clustered.csv', index_col=False).drop(columns=['embedding'])
    df_centroids = df_centroids[df_centroids['median'] == 1]
    df_centroids = df_centroids[df_centroids['cluster'] != -1]

    df_centroids['llm_job_desc'] = df_centroids['full description'].apply(llm_job_summarizer.summarize_job)
    df_centroids['llm_job_desc'] = df_centroids['llm_job_desc'].apply(lambda x: x.data)

    df_centroids[['llm_job_desc', 'full description', 'job id']].to_csv('gemini_job_descriptions.tsv', sep='\t', index=False)
    print()
