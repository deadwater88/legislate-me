from bs4 import BeautifulSoup
import urllib

def bill_scraper(bill_url):
    r = urllib.urlopen(bill_url).read()
    soup = BeautifulSoup(r)
    blurb = soup.find(id="digesttext")

    for tag in soup.find_all('strong'):
        tag.replaceWith('')

    return blurb.get_text()
