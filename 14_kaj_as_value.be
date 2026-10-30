# 14_kaj_as_value.be - functions are values too

# A kaj without a name can be stored in a variable
dhoro dui_gun = kaj (x) { ferot x * 2 }
dekhao dui_gun(21)

# ...or given to another function
kaj protitar_upor(talika, f) {
    dhoro fol = []
    protiti jinish talika theke {
        jukto(fol, f(jinish))
    }
    ferot fol
}
dekhao protitar_upor([1, 2, 3], kaj (x) { ferot x * x })

# shajao can sort by anything you choose
dhoro manush = [
    {"nam": "Rahim", "boyosh": 30},
    {"nam": "Mitu", "boyosh": 19},
    {"nam": "Karim", "boyosh": 25}
]
dhoro boyosh_onujayi = shajao(manush, kaj (m) { ferot m.boyosh })
protiti m boyosh_onujayi theke {
    dekhao m.nam, m.boyosh
}

# A function that makes functions
kaj guner_kaj(n) {
    ferot kaj (x) { ferot x * n }
}
dhoro tin_gun = guner_kaj(3)
dekhao tin_gun(10)
