from bs4 import BeautifulSoup
import urllib

def blurb_scraper(bill_url):
    r = urllib.urlopen(bill_url).read()
    soup = BeautifulSoup(r, "lxml")
    soup = soup.find("span", {"id": "digesttext"})
    text = soup.get_text()
    return text
