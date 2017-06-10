from bs4 import BeautifulSoup
import urllib
import collections
subjects = [
  'Agriculture and Food',
  'Animal Rights and Wildlife Issues',
  'Arts and Humanities',
  'Budget, Spending, and Taxes',
  'Business and Consumers',
  'Campaign Finance and Election Issues',
  'Civil Liberties and Civil Rights',
  'Commerce',
  'Crime',
  'Drugs',
  'Education',
  'Energy',
  'Environmental',
  'Executive Branch',
  'Family and Children Issues',
  'Federal, State, and Local Relations',
  'Gambling and Gaming',
  'Government Reform',
  'Guns',
  'Health',
  'Housing and Property',
  'Immigration',
  'Indigenous Peoples',
  'Insurance',
  'Judiciary',
  'Labor and Employment',
  'Legal Issues',
  'Legislative Affairs',
  'Military',
  'Municipal and County Issues',
  'Nominations',
  'Other',
  'Public Services',
  'Recreation',
  'Reproductive Issues',
  'Resolutions',
  'Science and Medical Research',
  'Senior Issues',
  'Sexual Orientation and Gender Issues',
  'Social Issues',
  'State Agencies',
  'Technology and Communication',
  'Trade',
  'Transportation',
  'Welfare and Poverty'
]
def blurb_scraper(bill_url):
    r = urllib.urlopen(bill_url).read()
    soup = BeautifulSoup(r, "lxml")
    blurb = soup.find("span", {"id": "digesttext"}).getText().split(" ")
    # print " ".join(blurb)

    all_words = soup.get_text().split(" ")
    subject_counter = collections.Counter(all_words)

    max_occurrences = 0
    most_common_subject = "OTHER"
    for subject in subjects:
        if subject_counter[subject] > max_occurrences:
            most_common_subject = subject
            max_occurrences = subject_counter[subject]

    if len(blurb) > 100:
        blurb = blurb[:100]
        text = " ".join(blurb) + "..."
    else:
        text = " ".join(blurb)

    return { 'blurb': text, 'most_common_subject': most_common_subject}

print blurb_scraper('http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB8')
