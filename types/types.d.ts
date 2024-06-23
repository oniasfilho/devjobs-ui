interface JobListing {
  id: string;
  company_name: string;
  job_title: string;
  employment_type: string;
  posted_time: string;
  location: string;
  logo: string;
  company_site: string;
  general_description: string;
  requirements: {
    overview: string;
    requirements_list: string[];
  };
  responsibilities: {
    overview: string;
    responsibilities_list: string[];
  };
}
