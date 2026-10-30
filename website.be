# website.be - a small website made with BE
# Run it:   be run examples/website/website.be
# Then open http://localhost:8000 in your browser. Press Ctrl+C to stop.

dhoro amar_site = website()
dhoro lekhaguli = ["BE can build websites", "The code is Banglish, the page is English"]

kaj pata_banao(shironam, bhitor) {
    ferot "<!doctype html><html><head><meta charset='utf-8'><title>{shironam}</title>"
        + "<link rel='stylesheet' href='/static/style.css'></head>"
        + "<body><h1>{shironam}</h1>{bhitor}</body></html>"
}

# The home page
amar_site.pata("/", kaj (r) {
    dhoro talika = ""
    protiti lekhati lekhaguli theke {
        talika += "<li>{lekhati}</li>"
    }
    dhoro form = "<form method='post' action='/add'><input name='lekha' placeholder='New note'>"
        + "<button>Add</button></form>"
    ferot pata_banao("My notes", "<ul>{talika}</ul>" + form + "<p><a href='/hello/Rahim'>Say hello</a></p>")
})

# A form sends a new note here: r.ghor holds what was typed in its boxes
amar_site.pata("/add", kaj (r) {
    jodi r.poddhoti == "POST" ebong parishkar(r.ghor.lekha) != "" {
        jukto(lekhaguli, r.ghor.lekha)
    }
    ferot uttor("<meta http-equiv='refresh' content='0; url=/'>Saved", 200)
})

# :nam in the address becomes r.ongsho.nam
amar_site.pata("/hello/:nam", kaj (r) {
    ferot pata_banao("Hello", "<p>Hello, {r.ongsho.nam}!</p><p><a href='/'>Back</a></p>")
})

# A small API: dictionaries and lists are sent as JSON
amar_site.pata("/api/notes", kaj (r) {
    ferot {"count": lomba(lekhaguli), "notes": lekhaguli}
})

# fileguli: the CSS, pictures and JavaScript files in the "public" folder
amar_site.fileguli("/static", "public")

amar_site.chalao(8000)
