from bs4 import BeautifulSoup
import urllib
import collections
import re

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
  'Transportation'
  'Welfare and Poverty'
]
def blurb_scraper(bill_url):
    r = urllib.urlopen(bill_url).read()
    soup = BeautifulSoup(r, "lxml")
    blurb = soup.find("span", {"id": "digesttext"}).getText().split(" ")
    all_words_as_a_string = soup.get_text()

    max_occurrences = 0
    most_common_subject = "OTHER"
    for subject in subjects:
        count_of_matches = 0
        for subject_word in subject.split(" "):
            lowercase_subject_word = subject_word.lower()
            if (lowercase_subject_word in ['and', 'state', 'local', 'federal,', 'government']):
                continue
            matches_array = re.findall(subject_word, all_words_as_a_string, re.IGNORECASE)
            count_of_matches += len(matches_array)
        if count_of_matches > max_occurrences:
            most_common_subject = subject
            max_occurrences = count_of_matches
    if len(blurb) > 100:
        blurb = blurb[:100]
        text = " ".join(blurb) + "..."
    else:
        text = " ".join(blurb)
    return { 'blurb': text, 'most_common_subject': most_common_subject}


print blurb_scraper('http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180AB39')
