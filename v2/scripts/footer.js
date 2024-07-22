let year = (cy = new Date().getFullYear()) !== 2024 ? "-" + ("" + cy).slice(-2) : "";
document.getElementById("footer").innerHTML = `&copy; Rujul Nayak 2024${year}`;