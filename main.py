import re

with open("revision/index.html", "r") as f:
    lst = re.findall(r'<a href="\./(.*)/">', f.read())

with open("sitemap.txt", "r") as g, \
    open("sitemap.txt", "a") as h:
    sitemap = re.findall(r'revision/(.*)/', g.read())
    for string in lst:
        if string not in sitemap:
            h.write("\nhttps://cs.rujulnayak.com/revision/" + string + "/")