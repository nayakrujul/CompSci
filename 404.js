const LATEST = "v1";

let url = location.href;

let matches = [...url.matchAll(/.*\/revision\/(.*)\/(?:index.html)?/gi)];

if (matches.length > 0) {
    let x = matches[0][1];
    location.replace(`https://cs.rujulnayak.com/${LATEST}/${x}`);
}