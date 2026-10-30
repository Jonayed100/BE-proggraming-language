# counter_app.be - an app with a window, text, an input box and buttons
# On a computer:     be run examples/app/counter_app.be
# In the playground: pick "App: counter app" and click Run

dhoro amar_janala = janala("BE Counter", 360, 320)
dhoro gona = 0

dhoro shironam = amar_janala.lekha("Count: 0").akar(22)

# sari() is a row: its buttons sit side by side
dhoro botam_sari = amar_janala.sari()
botam_sari.botam("Add 1", kaj () {
    gona += 1
    shironam.bodlao("Count: {gona}")
})
botam_sari.botam("Reset", kaj () {
    gona = 0
    shironam.bodlao("Count: 0")
})

amar_janala.lekha("Your name:")
dhoro nam_ghor = amar_janala.ghor("")

amar_janala.botam("Say hello", kaj () {
    dhoro nam = parishkar(nam_ghor.man())
    jodi nam == "" {
        shironam.bodlao("Type your name first").rong("red")
    } nahole {
        shironam.bodlao("Hello, {nam}!").rong("green")
    }
}).pechon("#0d6b49").rong("white")

amar_janala.chalao()
