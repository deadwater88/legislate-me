from bs4 import BeautifulSoup
import urllib

def blurb_scraper(bill_url):
    r = urllib.urlopen(bill_url).read()
    soup = BeautifulSoup(r, "lxml")
    soup = soup.find("span", {"id": "digesttext"})
    text_array = soup.get_text().split(" ")
    if len(text_array) > 100:
        text_array = text_array[:100]
        text = " ".join(text_array) + "..."
    else:
        text = " ".join(text_array)
    return text
