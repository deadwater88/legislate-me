from bs4 import BeautifulSoup
import urllib

def blurb_scraper(bill_url):
    r = urllib.urlopen(bill_url).read()
    soup = BeautifulSoup(r)
    blurb = soup.find(id="digesttext")

    for tag in blurb.find_all('strong'):
        tag.replaceWith('')

    return blurb.get_text()
    soup = BeautifulSoup(r, "lxml")
    soup = soup.find("span", {"id": "digesttext"})
    text = soup.get_text()
    return text
print blurb_scraper('http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB6')
