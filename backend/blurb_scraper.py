from bs4 import BeautifulSoup
import urllib
r = urllib.urlopen('http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=200920100AB667').read()
soup = BeautifulSoup(r)
blurb = soup.find(id="digesttext")

for tag in soup.find_all('strong'):
    tag.replaceWith('')

print blurb.get_text()
