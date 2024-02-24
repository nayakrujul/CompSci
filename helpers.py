import re
import os

ld = os.listdir("revision/")

def rreplace(s, old, new):
    li = s.rsplit(old, 1) #Split only once
    return new.join(li)

with open("revision/index.html", "r", encoding='utf-8') as e:
    t = e.read()
    lst = re.findall(r'<a href="\./(.*)/">', t)
    for s in ld:
        if ("." not in s) and (s[0].isdigit()) and (s not in lst):
            t = rreplace(t, "</ul>", f"""    <li><a href="./{s}/">{s.replace('-', '.', 1).replace('-', chr(92), 1).replace('-', ' ').replace(chr(92), ' - ')}</a></li>
        </ul>""")
            lst.append(s)

with open("revision/index.html", "w") as f:
    f.write(t)

with open("sitemap.txt", "r", encoding='utf-8') as g, \
        open("sitemap.txt", "a") as h:
    sitemap = re.findall(r'revision/(.*)/', g.read())
    for string in lst:
        if string not in sitemap:
            h.write("\nhttps://cs.rujulnayak.com/revision/" + string + "/")