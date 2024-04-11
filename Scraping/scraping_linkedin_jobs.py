from bs4 import BeautifulSoup
import pandas as pd
from tqdm import tqdm
from driver import Driver, RequestDriver
from tqdm import tqdm


class Scraper:
    def __init__(self):
        self.df = None
        self.jobs_dictionary = None
        # self.driver = Driver()
        self.driver = RequestDriver()
        self.all_links, self.row = [], []
        self.page_link = 'https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?start={}'
        self.job_link = 'https://www.linkedin.com/jobs-guest/jobs/api/jobPosting/{}'
        self.job_id_list = []

        "Initialize the dictionary to store the job details"
        self.jobs_dictionary = {
            'job id': [],
            'company name': [],
            'job title': [],
            'job level': [],
            'job description': [],
            'seniority_level': [],
            'Employment_type': [],
            'job_function': [],
            'industries': []
        }

        self.df = pd.DataFrame(
            columns=[
                'company', 'job title', 'level', 'full description',
                'seniority level', 'employment type', 'job function', 'industries'
            ]
        )
        self.soup, self.span, self.h3 = None, None, None

    def get_all_jobs(self):
        """ Get all the job ids from the LinkedIn jobs page """
        for index in tqdm(range(0, 1000, 8)):

            try:
                self.driver.get(self.page_link.format(index))
                page_source = self.driver.get_page_source()
                soup = BeautifulSoup(page_source, 'html.parser')

                # Find the element containing the job details
                all_jobs_on_this_page = soup.find_all("li")
                for job in range(0, len(all_jobs_on_this_page)):
                    job_id = \
                        all_jobs_on_this_page[job].find("div", {"class": "base-card"}).get('data-entity-urn').split(
                            ":")[3]
                    self.job_id_list.append(job_id)

            except Exception as e:
                print(f"{index=}", str(e))

    def get_company(self):
        """Get the company name of the job"""
        try:
            company = self.soup.find("div", {"class": "top-card-layout__card"}).find("a").find("img").get('alt')
        except:
            company = None
        self.jobs_dictionary['company name'].append(company)

    def get_job_title(self):
        """Get the job title of the job"""
        try:
            job_title = self.soup.find("div", {"class": "top-card-layout__entity-info"}).find("a").text.strip()
        except:
            job_title = None
        self.jobs_dictionary['job title'].append(job_title)

    def get_level(self):
        "Get the job level of the job"
        try:
            level = self.soup.find("ul", {"class": "description__job-criteria-list"}).find("li").text.replace(
                "Seniority level", "").strip()
        except:
            level = None

        self.jobs_dictionary['job level'].append(level)

    def get_full_description(self):
        """ Get the full description of the job """
        try:
            full_description = self.soup.find("div", {
                "class": "show-more-less-html__markup show-more-less-html__markup--clamp-after-5 relative overflow-hidden"
            }).text.strip()
        except:
            full_description = None

        self.jobs_dictionary['job description'].append(full_description)

    def extra_information(self):
        seniority_level = None
        employment_type = None
        job_function = None
        industries = None

        try:
            for sub_header in self.soup.find_all("li", {"class": "description__job-criteria-item"}):
                try:
                    self.h3 = sub_header.find('h3').text.strip()
                    self.span = sub_header.find('span').text.strip()
                    if self.h3 == 'Seniority level':
                        seniority_level = self.span.replace("Seniority level", "").strip()
                    elif self.h3 == 'Employment type':
                        employment_type = self.span
                    elif self.h3 == 'Job function':
                        job_function = self.span
                    elif self.h3 == 'Industries':
                        industries = self.span
                except:
                    pass
        except:
            pass

        self.jobs_dictionary['seniority_level'].append(seniority_level)
        self.jobs_dictionary['Employment_type'].append(employment_type)
        self.jobs_dictionary['job_function'].append(job_function)
        self.jobs_dictionary['industries'].append(industries)

    def create_job_dictionary(self):
        """ Create a dictionary of all the jobs scraped from Linkedin """

        for job_id in tqdm(self.job_id_list):
            self.driver.get(self.job_link.format(job_id))
            page_source = self.driver.get_page_source()
            self.soup = BeautifulSoup(page_source, 'html.parser')
            self.jobs_dictionary['job id'].append(job_id)
            self.get_company()
            self.get_job_title()
            self.get_level()
            self.get_full_description()
            self.extra_information()

    def create_df(self):
        self.df['job id'] = self.jobs_dictionary['job id']
        self.df['company'] = self.jobs_dictionary['company name']
        self.df['job title'] = self.jobs_dictionary['job title']
        self.df['level'] = self.jobs_dictionary['job level']
        self.df['full description'] = self.jobs_dictionary['job description']
        self.df['seniority level'] = self.jobs_dictionary['seniority_level']
        self.df['employment type'] = self.jobs_dictionary['Employment_type']
        self.df['job function'] = self.jobs_dictionary['job_function']
        self.df['industries'] = self.jobs_dictionary['industries']

    def save_df(self):
        self.df = self.df.dropna()
        self.df = self.df.drop_duplicates(subset=['full description'])
        self.df.to_csv('scraped_data/jobs_linkedin_6.csv', index=False)

    def run(self):
        self.get_all_jobs()
        print(self.job_id_list)
        self.create_job_dictionary()
        self.create_df()
        self.save_df()
