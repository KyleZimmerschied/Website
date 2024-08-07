---
# About
type: page
title: "Data" # Add a page title
summary: "Data Repository" # Add a page description
bibliography: references.bib

# Homepage is headless, other widget pages are not.
headless: false
---

Rule of thumb when naming files:

-   Human readable: info about content
    -   Numeric values always go first
    -   ISO 8601 standard (yyyy-mm-dd) for date (but would not recommend using date in the first place)
    -   Never delete leading 0.
-   Compatible with every system default ordering
-   Avoid spaces, uppercase.

For data management (should be put under datasheet.md or the README.md file): see Datasheet for Datasets (Gebru et al., 2021) (these questions have been modified/simplified, to see the original questions with examples, please see the paper):

-   Motivation

    -   Why the dataset was created?

    -   Who created the dataset?

    -   Who funded the project?

-   Composition

    -   What do the observations represent?

    -   Is the dataset the population or a small sample (random or nonrandom)?

    -   Describe missing data (e.g., type and missing mechanism)

    -   Describe data splits (e.g., training, testing, etc.)

    -   Does the dataset contain sensitive or confidential information?

        For dataset related to people

    -   Can data users identify sub-population or individuals from the dataset?

-   Collection process

    -   How the data was collected (directly observable or indirectly inferred)

    -   What procedures were used to collect data?

    -   What was the sampling strategy (e.g., probaiblistic)?

    -   Data time frame

    -   Were any ethical review processes conducted? (e.g., institutional review board?)

        For dataset related to people

    -   Did you collect data from respondents or via third parties?

    -   Did you obtain respondents' consents?

    -   Is there any mechanism for respondents to revoke their consent?

    -   Did you conduct data protection impact analysis?

-   Prepossessing/cleaning/labeling

    -   Describe these processes

    -   Is the raw dataset still available upon request?

    -   What was the software used to process data? And provide a script if possible

-   Uses

    -   Provide exemplary uses of the dataset (a list of published papers using the dataset is encouraged)

    -   Is there anything about the dataset (e.g., composition, collection, processing) that can impact future uses?

    -   In which case the dataset should not be used?

-   Distribution

    -   How will the dataset be distributed? (e.g., API, GitHub, data repo)

    -   When will the dataset be available?

    -   Does the dataset involve copyright, intellectual property (IP) license, or terms of use?

-   Maintenance

    -   Who support/host/maintain the dataset?

    -   How to contact data maintainer?

    -   Is there any error that data users need to know?

    -   Will the dataset be updated?

    -   Will older versions of the dataset continue to be supported?

    -   How can others extend/build on/contribute to the dataset?

# Management

-   [MSCI](https://www.msci.com/real-time-index-data-search) (formerly GMI Ratings)
    -   Companies
        -   Corporate Ownership
    -   Directors:
        -   Corporate Board structure
        -   Independence Director Positions
        -   Committee Assignments
        -   Director Compensation
    -   CEO Compensation
    -   Takeover defenses
-   [World Management Survey](https://worldmanagementsurvey.org/)
-   [Harvard's "Creating Emerging Markets"](https://www.hbs.edu/creating-emerging-markets/video-database/Pages/default.aspx)
-   [Workplace discrimination](https://www.umass.edu/eeodatanet/)
-   [CoreSignal- Employee Review](https://coresignal.com/alternative-data/company-employee-review-data/): Employee reviews
-   [CoreSignal - Job Posting](https://coresignal.com/alternative-data/job-postings-data/)
-   [CoreSignal - Employee data](https://coresignal.com/alternative-data/employee-data/)
-   [CSRHub](https://www.csrhub.com/) by Consensus ESG ratings: Data on CSR around the world (paid)

## Innovation

### Patent Data

-   [See this post for more details](https://mikenguyen.netlify.app/post/patent-databases/)
-   [Global Entrepreneurship Monitor](https://www.gemconsortium.org/data)
-   [Firm and Industry Evolution, Entrepreneurship, and Strategy](http://five.dartmouth.edu/datasets?)
-   [NBER patent](https://sites.google.com/site/patentdataproject/Home)
-   [Google Patents Public Datasets on BigQuery](https://github.com/google/patents-public-data): worldwide + USPTO full-text
-   [USPTO PatentsView](https://patentsview.org/): US only (with raw data)
-   [PATSTAT](https://www.epo.org/searching-for-patents/business/patstat.html#tab3): Europe patent from EPO
-   [DISCERN - Duke Innovation & Scientific Enterprises Research Network](https://doi.org/10.5281/zenodo.3976774): (Arora & Sheer, 2021) strongly recommend using this one to match patent and Compustat
-   [Extended Data (till 2020)](https://github.com/KPSS2017) following Kogan et al. (2017)
-   [Lens](https://iiindex.org/datasets/lens): cost to search
-   [WIPO](https://wipo-analytics.github.io/): with guide for coding
-   [UVA Darden Global Corporate Patent Dataset](https://patents.darden.virginia.edu/)
-   [PatCit: A Comprehensive Dataset of Patent Citations](https://doi.org/10.5281/zenodo.4391095)
-   [CoreSignal - Repo](https://coresignal.com/alternative-data/community-and-repository-data/): software projects, experienced developers, and data analysts.
-   [KickStarter](https://webrobots.io/indiegogo-dataset/)
-   [KickStarter data from Kaggle](https://www.kaggle.com/datasets/kemical/kickstarter-projects)
-   [Indiegogo](https://webrobots.io/indiegogo-dataset/)

# Academic Literature

-   [Microsoft Academic Knowledge Graph](https://makg.org/)
-   [OpenAlex](http://openalex.org/)
-   [PubMed](https://pubmed.ncbi.nlm.nih.gov/download/#annual-baseline)
-   [Web of Science](https://www.webofscience.com/wos/author/search)
-   [Scopus](https://www.scopus.com/home.uri)
-   [Reliance on Science in Patenting](https://doi.org/10.5281/zenodo.5803985): front-page and in-text citations from patents to scientific articles through 2020

# Finance

-   Compustat
    -   Execucomp
    -   Capital IQ - Key Developments: event types for companies
-   CRSP
-   Worldscope: fundamental data for major international firms. Searchable by company name, country, exchange, or fundamental items. 1980+. (via WRDS)
-   [List of private firms](https://guides.loc.gov/company-research/private)
    -   [Crunchbase](https://www.crunchbase.com/): description on start-ups, companies, peoples

    -   [Dun&Bradstreet](https://www.dnb.com/): company info

    -   [Privco](https://system.privco.com/signin): financial and market intelligence on private firms

    -   [Corporate Registration](https://www.nass.org/business-services/corporate-registration): search info on corporation by state

    -   [SageWorks](https://www.sageworksdatabase.com/)

    -   [Thomasnet](https://www.thomasnet.com/): for suppliers and buyers

    -   [PitchBook](https://pitchbook.com/)
-   [World Bank](https://www.worldbank.org/en/publication/gfdr/data)
-   [IMF](https://www.imf.org/en/Data#data)
-   [Mergent Online](https://www.mergentonline.com/basicsearch.php)
-   [Orbis](https://www.bvdinfo.com/en-us/our-products/data/international/orbis): global firms including private (is survivor biased, companies are dropped after 10 years if not active)
-   [SDC Platinum](https://www.refinitiv.com/en/products/sdc-platinum-financial-securities): historical transactions
-   [IRS Tax Statistics](https://www.irs.gov/statistics) [SOI Tax Stat](https://www.irs.gov/statistics/soi-tax-stats-corporation-tax-statistics)
-   [Zillow Home Prices](https://www.zillow.com/research/data/): Zillow's API allows business access only (not for educational or research purposes). But they do allow to download small [dataset](https://www.zillow.com/research/data/)
-   [Redfin](https://www.redfin.com/news/data-center/): [full data set](https://www.redfin.com/news/data-center/), [definition](https://www.redfin.com/news/data-center-metrics-definitions/)
-   [National Association of Realtors](https://www.nar.realtor/research-and-statistics/housing-statistics): [Citation](https://www.nar.realtor/research-and-statistics/citation-guidelines-for-nar-research-statistics)
-   [10-K Text data by Hoberg-Phillips](http://hobergphillips.tuck.dartmouth.edu/industryclass.htm)
-   [Thomson Reuters](https://www.thomsonreuters.com/en/products-services.html)
-   [Pitchbook](https://pitchbook.com/data): private and public data
-   [OANDA](https://www.oanda.com/us-en/): currency-related data
-   [Professor French database](http://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)
-   [open Data Network](https://www.opendatanetwork.com/)
-   [World Bank](https://datahelpdesk.worldbank.org/knowledgebase/articles/889386-developer-information-overview#:~:text=The%20Finances%20API%20provides%20programmatic,from%20the%20Climate%20Knowledge%20Portal.)
-   [Data Current](http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datacurrent.html)
-   [Trading Economics](https://tradingeconomics.com/): paid API service
-   [AQR Dataset](https://www.aqr.com/Insights/Datasets)
-   [CoreSignal - Company funding](https://coresignal.com/alternative-data/company-funding-data/)
-   [CoreSignal Firmographic data](https://coresignal.com/alternative-data/firmographic-data/)
-   [Failory](https://www.failory.com/cemetery): Data on failed businesses
-   [HUD](https://www.huduser.gov/portal/pdrdatas_landing.html): American Housing survey, housing data, public housing population
-   [XBRL Research](https://www.xbrlresearch.com/firm-complexity/): measure firm and accounting complexity
-   International Fundamentals:
    -   China: CSMAR (via WRDS)

    -   EU: Amadeus

    -   India: [Prowess](https://prowessdx.cmie.com/)

    -   Canada: [SEDAR](https://www.sedar.com/homepage_en.htm)

    -   Japan: [EDINET](https://disclosure.edinet-fsa.go.jp)

## Risk

-   [Sustainalytics](https://www.sustainalytics.com/)

## Crypto Currency

-   [CryptoScamDB](https://cryptoscamdb.org): Report about scam (only name of blacklisted domains)

-   [BitcoinAbuse](https://www.bitcoinabuse.com/): report about scam with date, abuser, description, from country, and crated_at.

# Economics

-   [Journal of Applied Econometrics](http://qed.econ.queensu.ca/jae/)
-   [DICE - Database for Instituional Comparisons of Economies](https://www.ifo.de/dice)
-   [UK Data Service](https://www.ukdataservice.ac.uk/get-data/open-data.aspx)
-   [World Bank](https://data.worldbank.org/)
-   [Bureau of Economic Analysis](https://www.bea.gov/): GDP, personal Income, International Trade, and Transactions.
-   [International Monetary Fund (IMF) Data](https://data.imf.org/)
-   [Consumer Expenditure Surveys](https://www.bls.gov/cex/)
-   [U.S. Bureau of Labor Statistics](https://www.bls.gov/cex/pumd_data.htm#csv)
    -   [Details](https://www.bls.gov/cex/pumd-getting-started-guide.htm)
-   [Kiva](https://www.kiva.org/): micro loan data. [download snapshots](https://www.kiva.org/build/data-snapshots). To see the [data summary](http://kivadata.org/index.html)
    -   [Preprocessed data](https://www.fodava.gatech.edu/processed-kiva-data) (Choo et al, 2014)

# Marketing

## Data Breach

-   [privacyright.org](https://privacyrights.org/data-breaches)

-   [DLDOS: Data Loss Database - Open Source (2000-2008)](https://attrition.org/dataloss/dldos.html)

## App

-   [apptweak](https://www.apptweak.com/en) or [apptweak.io](https://www.apptweak.io/) (paid): app download, revenue, rating

-   [apptopia](https://dev.apptopia.com/#ranked-apps) (paid)

-   [sensortower](https://app.sensortower.com/) (paid)

-   [appfollow](https://appfollow.io/pricing) (paid)

-   [Apple Search Ads service](https://searchads.apple.com/advanced): Apple Search Popularity Score

## Social Media

-   [Instaloader](https://instaloader.github.io/): download content from Instagram

-   [instagrapi](https://adw0rd.github.io/instagrapi/): download and push data on Instagram

## Product Introduction

-   [Mintel](https://www.mintel.com/)

-   [IRI](https://www.iriworldwide.com/en-us)

## Sentiment

-   [DataStreamer](https://www.datastreamer.io/): Search API returns search results from multiple sources (Twitter, Inst gram, Blogs, Forums, News, International News).
-   Bloomberg: sentiments based on news articles and Twitter
-   [Meltwater](https://www.meltwater.com/en): paid
-   [Infegy](https://www.infegy.com/): paid

## Firm

-   [Fame](https://www.bvdinfo.com/en-gb/our-products/data/national/fame): data on companies in the UK and Ireland.

-   [Wharton Customer Analytics](https://wca.wharton.upenn.edu/): write proposal to partner with firms to get data

## Branding

-   [EquiTrend The Harris Poll](https://theharrispoll.com/equitrend/) [1](https://theharrispoll.com/equitrend-ranking-page/); [2](https://theharrispoll.com/the-harris-poll-announces-this-years-brands-of-the-year-2020/):
    -   three factors -- Familiarity, Quality and Purchase Consideration
    -   45,000 US consumers assessed nearly 2,000 brands across 196 categories.
    -   91 companies were awarded the coveted Brand of the Year designation across 87 categories
-   [World Brand Lab](http://www.worldbrandlab.com/): brand equity ranking in China.
-   [Brand24 - Media Monitoring Tool](https://brand24.com/): monitor brand from Twitter, Facebook, and Instagram.
-   [Affectiva - Humanizing Technology : Affectiva](https://www.affectiva.com/) data on emotional reactions of 53k ads over 90 countries and 8 years.
-   YouGov: daily data on brands. (see Colicev et al. 2018 when using this dataset).

## Advertising

-   [WARC](https://www.warc.com/data)
    -   [Adspend](https://www.warc.com/data/adspend)
    -   [Media Owner Profile](https://www.warc.com/data/mediaownerprofiles)
-   [AdAge](https://adage.com/article/datacenter/leading-national-advertisers-index/106348): data on ad spending
-   [IAB Advertising Spend and Revenue Research](https://www.iab.com/topics/ad-revenue/?spend=1)
-   [Facebook Ads API](https://www.facebook.com/ads/library/api/?source=archive-landing-page&session_id=583e8a37-b100-468a-8266-70538cc17b6f)
-   [Kantar Media](https://www.kantar.com/)

## Reports

-   [Datareportal](https://datareportal.com/): on online activities

## Others

-   [American Customer Satisfaction Index (ACSI)](https://www.theacsi.org/)
-   [Instacart](https://www.instacart.com/datasets/grocery-shopping-2017)
-   [CMO Spend Survey 2018--2019](https://images.gartnerformarketers.com/Web/Gartner/%7Bb5a5ad17-bf4c-4ce4-adb3-4eed347852c8%7D_CMO_Spend_Survey_Note_Repackage_FINAL.pdf)
-   [GWI](https://www.gwi.com/data) Global Consumer data (students might get free access)
-   [Global Market Database](https://globalmarketdatabase.com/): global market data
-   [Safeguard Data](https://www.safegraph.com/): Foot traffic, mobile data, transaction data.
-   [comScore Media Metrix](https://www.comscore.com/): Online Traffic (direct traffic, search engine referrals, transaction counts)
-   **Global Market Information Database** by Euromonitor International (good for studying market penetration).
-   [IRI Marketing Data Set](https://pubsonline.informs.org/doi/10.1287/mksc.1080.0450): Panel Scanner data for academic research for 30 product categories in 5 years that include sales, pricing, promotion data.
-   [CoreSignal Tech Product Review](https://coresignal.com/alternative-data/tech-product-review-data/) + [Technographic data](https://coresignal.com/alternative-data/technographic-data/)
-   [Better Marketing for a Better World](https://www.bmbw.org/data/)
-   [GWI](https://www.gwi.com/): Paid + Free data on marketing strategy globally.
-   [Data.ai](https://www.data.ai/en/): Paid + Free data on app store tracking, reviews, usage, optimization, paid search, revenue estimates, Game IQ, advertising estimate
-   [Similarweb](https://www.similarweb.com/): Paid + Free data on website traffic, app analysis
-   [Box Office Mojo](https://www.boxofficemojo.com/): data on movie box office performance
-   [The Numbers](https://www.the-numbers.com/): Data on movie
-   [Metacritic](https://www.metacritic.com/): Data on movie reviews
-   [camelcamelcamel](https://camelcamelcamel.com/): Amazon price tracker
-   [Google Trend Dataset](https://cloud.google.com/blog/products/data-analytics/top-25-google-search-terms-now-in-bigquery?utm_source=youtube&utm_medium=unpaidsoc&utm_campaign=CDR_swo_analytics_trendsvideo_trendsdatasetblog_071421&utm_content=description) available via [BigQuery](https://cloud.google.com/bigquery)
-   [Webscrape datasets](https://web-scraping.org/docs/databases/datasets/)
-   [Ward Intelligence](https://wardsintelligence.informa.com/datacenter): Car data
-   [J. D. Power](https://www.jdpowervalues.com/): car data (paid)
-   [Data Provider](https://www.dataprovider.com/data/): industry data (paid) with API
-   [Datarade](https://datarade.ai/): Data marketplace

## Review

-   TripAdvisorReview: [using Octoparse](https://helpcenter.octoparse.com/hc/en-us/articles/4405892648345-Scrape-customer-reviews-from-Tripadvisor-V8-4-)

    -   [Small dataset of TripAdvisor](https://www.researchgate.net/publication/308968574_TripAdvisor_Dataset)

-   [Epinions and Ciao](https://www.cse.msu.edu/~tangjili/datasetcode/truststudy.htm)

-   [Yelp Review](https://www.yelp.com/dataset)

-   [Julian McAuley](https://cseweb.ucsd.edu/~jmcauley/)'s lab [data](https://cseweb.ucsd.edu/~jmcauley/datasets.html): Recommender System and personalization dataset

-   [Trust Pilot](https://developers.trustpilot.com/): [Consumer review](https://developers.trustpilot.com/consumer-api)

-   [Goodread dataset](https://www.kaggle.com/datasets/b2dde9353c9d10c36e4d6b593a74c109dbaca6393a1ca0f2c7abafeba7633641): Book review. [More](https://www.kaggle.com/datasets/jealousleopard/goodreadsbooks)

-   [MovieLens](https://www.tensorflow.org/datasets/catalog/movielens): Movie recommendation

-   [Ratebeer](https://www.ratebeer.com/): Beer review. [Sign up for API](https://www.ratebeer.com/api.asp). Or use [SNAP data](https://snap.stanford.edu/data/web-RateBeer.html#:~:text=This%20dataset%20consists%20of%20beer%20reviews%20from%20ratebeer.,%22aspects%22%3A%20appearance%2C%20aroma%2C%20palate%2C%20taste%2C%20and%20overall%20impression.)

## Search Engine Data

-   [Google Trends](https://trends.google.com/trends)

-   [Baidu Index](http://index.baidu.com/v2/index.html)

-   [SerpAPI](https://serpapi.com/): paid

## Sales

-   [Kilts Center for Marketing](https://www.chicagobooth.edu/research/kilts/datasets): Chicago Booth
    -   Subscription Dataset:
        -   [Nielsen Dataset](https://www.chicagobooth.edu/research/kilts/datasets/nielsen)
    -   Public Datasets:
        -   [Dominick's Dataset](https://www.chicagobooth.edu/research/kilts/datasets/dominicks): 1989 - 1994, store level data, shelf management and pricing
        -   [ERIM Dataset](https://www.chicagobooth.edu/research/kilts/datasets/erim): households, TV viewing data is available to measure exposure to commercials involving the products
        -   [BAYESM](https://www.chicagobooth.edu/research/kilts/datasets/bayesm) More like a software, but also includes some panel data.
-   [International Data Corporation](https://www.idc.com/): Market share

## Complaints

-   [Consumer Financial Protection Bureau](https://www.consumerfinance.gov/data-research/consumer-complaints/)

-   [Complaints Board](https://www.complaintsboard.com/): can search for businesses

-   [Federal Trade Commission](https://www.ftc.gov/news-events/data-visualizations/explore-data)

-   [Ripoff Report](https://www.ripoffreport.com/): Complaints, Reviews, Scams, Lawsuits, Frauds

# Health

-   [NHS Digital](https://digital.nhs.uk/data)

-   [HealthData](https://www.healthdata.gov/)

-   [WHO](https://www.who.int/data/gho)

-   [AWS Registry](https://registry.opendata.aws/)

-   [Medicare and Medicaid](https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/Medicare-Provider-Charge-Data/Physician-and-Other-Supplier)

-   [Child Health and Development Studies](https://www.chdstudies.org/research/information_for_researchers.php)

-   [Human Mortality](https://www.mortality.org/)

-   [NIH Data](https://healthcaredelivery.cancer.gov/seer-mhos/aboutdata/)

-   [MHealth Dataset](https://archive.ics.uci.edu/ml/datasets/MHEALTH+Dataset)

-   [Healthcare Cost and Utilization Project](https://hcup-us.ahrq.gov/databases.jsp)

-   [Open Payments](https://openpaymentsdata.cms.gov/): payments made by firms to doctors.

# Laws

-   [Bloomberg Law](https://news.bloomberglaw.com/): through most university law schools

-   [Google Case Law](https://scholar.google.com/): free, but no api (might be able to bypass with SerpAPI)

-   [Case Law Access Project](https://case.law/): free with api

-   Nexis Uni: through university (no API)

# Higher Education

-   [HERI Data](https://heri.ucla.edu/heri-data-archive/): The Higher Education Research Institute by UCLA

    -   CIRP Freshman Survey Trends: 1966 to 2008

    -   CIRP College Senior Survey Trends: 1994 to 2008

    -   HERI Faculty Survey Trends: 1989 to 1998

-   [National Survey of College Graduates](https://ncsesdata.nsf.gov/datadownload/)

-   [NCAA Shareable Data](https://www.ncaa.org/sports/2016/12/14/shared-ncaa-research-data.aspx): free

-   [NCAA Injury Surveillance Program](https://www.datalyscenter.org/): have to contact

-   [Equity in Athletics Data Analysis](https://ope.ed.gov/athletics/#/datafile/list): free

-   [Donorschoose](https://help.donorschoose.org/hc/en-us/articles/360047050214-Information-for-academic-researchers-data-scientists-and-developers): (free for researchers) public school teachers can ask for classroom donations.

-   [Education Data Partnership](https://www.ed-data.org/): access to K12 education data California.

# Social Science

-   [Institute For Social Research (ICPSR)](https://www.icpsr.umich.edu/web/pages/ICPSR/index.html): data archive at University of Michigan (free).
-   [Data.gov](https://catalog.data.gov/dataset): since 2009 and by the U.S. General Services Administration
-   [SODA](https://dev.socrata.com/publishers/): API data from governments, non-profits, and NGOs.
-   [Google Public Data](https://www.google.com/publicdata/directory)
-   [Open ICPSR](https://www.openicpsr.org/openicpsr/search/studies;jsessionid=E63E7964EF4081CF00A22C997AF3C887)
-   [SRDA](https://srda.sinica.edu.tw/datasearch_detail.php?id=2298#download): Chinese Survey Research Data Archive
-   [Consortium of European Social Science Data Archives(cessda)](https://www.cessda.eu/Tools-Services/For-Data-Users)
-   [Pew Research Center](https://www.pewresearch.org/download-datasets/)
-   [Kaggle](https://www.kaggle.com/datasets)
-   [Data Planet](https://www.data-planet.com/): by SAGE Publishing Resource.
-   [Mendeley](https://data.mendeley.com/datasets): mostly based on published paper (i.e., host dataset for published papers)
-   [Humdata](https://data.humdata.org/dataset): Humanitarian Data Exchange (including Facebook's Data for Good data)
-   Census Data:
    -   [IPUMS](https://www.nhgis.org/technical-support)
    -   [IPUMS Data in R](https://cran.r-project.org/web/packages/ipumsr/vignettes/ipums.html)
-   [Awesome Data on Everything](https://github.com/awesomedata/awesome-public-datasets)
-   [Government Data](https://github.com/cisagov/dotgov-data)
-   [Political Dataset](https://marvelous.ai/resources/)
-   [UK Data Service](https://ukdataservice.ac.uk/find-data/browse/)
-   [GSMA Intelligence](https://www.gsmaintelligence.com/): Paid data on cellular connection, mobile subscribers, IoT
-   [Google Cloud Dataset](https://cloud.google.com/datasets)
-   [Paperswithcode](https://paperswithcode.com/datasets)
-   [Datahub](https://old.datahub.io/dataset): free

# Network

-   [Stanford Large Network Dataset Collection (SNAP)](https://snap.stanford.edu/data/)
-   [Michael T. Heaney's rep datasets](http://michaeltheaney.com/data-sets)
-   [Gephi Dataset](https://github.com/gephi/gephi/wiki/Datasets)
-   [Facebook Privacy-Protected Full URLs Data Set](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/TDOAPG)

# Machine Learning

-   [Sciencemag](https://www.sciencemag.org/site/feature/data/compsci/machine_learning.xhtml)
-   [UCI Machine Learning repository](http://archive.ics.uci.edu/ml/index.php)

# Video data

-   [Internet Archive](https://archive.org/details/tv)
-   [YouTube API](https://developers.google.com/youtube/v3)

## Public APIs

-   [ProgrammableWeb](https://www.programmableweb.com/)

-   [Public APIs](https://github.com/public-apis/public-apis)

# Control Variables

-   [National holiday](https://holidayapi.com/): (Datta, 2022)

-   [Weather Underground](https://www.wunderground.com/about/data) [by IP Address](https://open.blockspring.com/bs/geolocation-by-ip-address-wunderground)

-   Changes to website using [Wayback Machine](http://web.archive.org/): can also submit links to track changes

# References

Arora, A., Belenzon, S., & Sheer, L. (2021). Matching patents to compustat firms, 1980--2015: Dynamic reassignment, name changes, and ownership structures. Research Policy, 50(5), 104217.

Choo, J., Lee, C., Lee, D., Zha, H., & Park, H. (2014, February). Understanding and promoting micro-finance activities in kiva. org. In *Proceedings of the 7th ACM international conference on Web search and data mining* (pp. 583-592).

Colicev, A., Malshe, A., Pauwels, K., & O'Connor, P. (2018). Improving consumer mindset metrics and shareholder value through social media: The different roles of owned and earned media. *Journal of Marketing*, *82*(1), 37-56.

Datta, Hannes, Harald J. van Heerde, Marnik G. Dekimpe, and Jan-Benedict E. M. Steenkamp (2022), "Cross-National Differences in Market Response: Line-Length, Price, and Distribution Elasticities in Fourteen Indo-Pacific Rim Economies," Journal of Marketing Research, 59 (2), 251-70

Kogan, L., Papanikolaou, D., Seru, A., & Stoffman, N. (2017). Technological innovation, resource allocation, and growth. *The Quarterly Journal of Economics*, *132*(2), 665-712.

Gebru, T., Morgenstern, J., Vecchione, B., Vaughan, J. W., Wallach, H., Iii, H. D., & Crawford, K. (2021). Datasheets for datasets. *Communications of the ACM*, *64*(12), 86-92.
