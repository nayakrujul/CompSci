import os
import sys

with open("newfile.txt", "r") as f:
    filename = f.read()
    if filename == "":
        sys.exit(0)

with open("newfile.txt", "w") as g:
    pass

path = "revision/" + filename.replace(".", "-").replace(" ", "-")
os.mkdir(path)

n, *t = filename.split()
r = " ".join(t)

p = sorted(os.listdir("revision/"))[-6]
a, b, *c = p.split("-")

with open(path + "/index.html", "w+") as h:
    h.write(f"""<!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" href="../../main.css">
        <link rel="stylesheet" href="../main.css">

        <title>{n} - {r} | Computer Science Revision</title>

        <link rel="icon" type="image/png" href="../icons/logo.svg"/>
        <meta property="og:image" content="../icons/logo.png" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="512" />

        <meta http-equiv="content-type" content="text/html; charset=utf-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="{n} - {r} | Computer Science Revision (an online, mobile-friendly revision guide for GCSE Computer Science students)">
    </head>

    <body>
        <h1>{n} &ndash; {r}</h1>
        <h3 class="home-link"><a href="../">Computer Science Revision</a></h3>
        <br />

        <a class="prev-link" href="../{p}/">Previous: {a}.{b} - {' '.join(c)}</a>
        <br /> <br />
            
        <!-- -->

        <br />

        <hr />

        <p class="question">
            <img src="../icons/question.svg" class="icon" />
            
        </p>

        <p class="spoiler noselect">
            <span class="default">Tap/click to reveal</span>
            <span class="answer">

            </span>
        </p>

        <br />

        <hr />

        <br /> <br />

        <div id="sub">© Rujul Nayak <span id="year">2024-</span></div>
        <script src="../../year.js"></script>

        <script src="../spoilers.js"></script>
    </body>
</html>""")