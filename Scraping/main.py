from scraping_linkedin_jobs import Scraper
from process_data import save_combined_data_files


def main():
    scape_linkedin = Scraper()
    scape_linkedin.run()
    save_combined_data_files()


if __name__ == '__main__':
    main()
