# calculator.be - a full calculator app, written only in BE
# On a computer:     be run examples/app/calculator.be
# In the playground: pick "App: calculator" and click Run
# Click the buttons or use the keyboard: numbers, + - * /, Enter for =,
# Backspace to delete one digit, Esc to clear.

# ---------------------------------------------------------------- the brain
# HisabJontro (the calculator machine) gets one key at a time, like a real button
# press, and keeps what the screen (porda) shows. The window only draws it.
# Every name here is Banglish: porda = screen, sutro = the sum above it,
# chinho = the sign (+ - * /), itihash = history, muchho = clear.

dhoro ONGKO = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
dhoro CHINHO_GULI = ["+", "-", "*", "/"]
dhoro CHINHO_DEKHTE = {"+": "+", "-": "−", "*": "×", "/": "÷"}

# How a number looks on the screen: rounded, so 0.1 + 0.2 shows 0.3
kaj dekhte(x) {
    ferot lekha(gol(x, 10))
}

shreni HisabJontro {
    kaj shuru() {
        ei.itihash = []          # past answers, newest last
        ei.muchho()
    }

    kaj muchho() {
        ei.porda = "0"          # the big number
        ei.sutro = ""             # the small line above it, like "12 +"
        ei.prothom = kichuna     # the first number of the sum
        ei.chinho = kichuna      # the sign waiting to be used: + - * /
        ei.notun = sotti         # sotti: the next digit starts a new number
    }

    # Every button and key comes here
    kaj chap(chabi_ti) {
        jodi ei.porda == "Error" {
            ei.muchho()           # after an error, any key starts again
        }
        jodi chabi_ti moddhe ONGKO { ei.ongko_dao(chabi_ti) }
        jodi chabi_ti == "." { ei.doshomik() }
        jodi chabi_ti moddhe CHINHO_GULI { ei.chinho_dao(chabi_ti) }
        jodi chabi_ti == "=" { ei.soman() }
        jodi chabi_ti == "C" { ei.muchho() }
        jodi chabi_ti == "back" { ei.ek_muchho() }
        jodi chabi_ti == "+/-" { ei.ulto_chinho() }
        jodi chabi_ti == "%" { ei.shotangsho() }
    }

    kaj ongko_dao(d) {
        jodi ei.notun {
            jodi ei.chinho == kichuna {
                ei.sutro = ""     # typing after = starts a new sum
            }
            ei.porda = d
            ei.notun = mittha
        } nahole jodi ei.porda == "0" {
            ei.porda = d
        } nahole jodi lomba(ei.porda) < 15 {
            ei.porda += d
        }
    }

    kaj doshomik() {
        jodi ei.notun {
            jodi ei.chinho == kichuna {
                ei.sutro = ""
            }
            ei.porda = "0."
            ei.notun = mittha
        } nahole jodi na ("." moddhe ei.porda) {
            ei.porda += "."
        }
    }

    kaj chinho_dao(s) {
        # 2 + 3 + ... works out 2 + 3 first, like a normal calculator
        jodi ei.chinho != kichuna ebong na ei.notun {
            ei.hishab()
            jodi ei.porda == "Error" {
                ferot
            }
        }
        ei.prothom = shonkha(ei.porda)
        ei.chinho = s
        ei.notun = sotti
        ei.sutro = "{dekhte(ei.prothom)} {CHINHO_DEKHTE[s]}"
    }

    kaj soman() {
        jodi ei.chinho == kichuna {
            ferot
        }
        dhoro sutro_lekha = "{dekhte(ei.prothom)} {CHINHO_DEKHTE[ei.chinho]} {dekhte(shonkha(ei.porda))} ="
        ei.hishab()
        jodi ei.porda == "Error" {
            ferot
        }
        ei.sutro = sutro_lekha
        ei.chinho = kichuna
        jukto(ei.itihash, {"sutro": sutro_lekha, "fol": ei.porda})
        jodi lomba(ei.itihash) > 8 {
            bad_dao(ei.itihash, 0)
        }
    }

    # Work out: prothom (chinho) porda, and show the answer
    kaj hishab() {
        dhoro a = ei.prothom
        dhoro b = shonkha(ei.porda)
        dhoro fol = 0
        jodi ei.chinho == "+" { fol = a + b }
        jodi ei.chinho == "-" { fol = a - b }
        jodi ei.chinho == "*" { fol = a * b }
        jodi ei.chinho == "/" {
            jodi b == 0 {
                ei.bhul_dekhao("Can't divide by 0")
                ferot
            }
            fol = a / b
        }
        jodi poromman(fol) >= 1000000000000000 {
            ei.bhul_dekhao("Number too big")
            ferot
        }
        ei.porda = dekhte(fol)
        ei.prothom = fol
        ei.notun = sotti
    }

    kaj bhul_dekhao(barta) {
        ei.muchho()
        ei.porda = "Error"
        ei.sutro = barta
    }

    # Delete the last digit
    kaj ek_muchho() {
        jodi ei.notun {
            ferot                # an answer can't be edited, only replaced
        }
        dhoro s = ei.porda
        jodi lomba(s) == 1 othoba (lomba(s) == 2 ebong s[0] == "-") {
            ei.porda = "0"
            ferot
        }
        dhoro choto_s = ""
        ghuro i = 0 theke lomba(s) - 2 {
            choto_s += s[i]
        }
        ei.porda = choto_s
    }

    # Change + to - and back
    kaj ulto_chinho() {
        jodi ei.porda == "0" othoba (ei.notun ebong ei.chinho != kichuna) {
            ferot
        }
        jodi ei.porda[0] == "-" {
            dhoro s = ""
            ghuro i = 1 theke lomba(ei.porda) - 1 {
                s += ei.porda[i]
            }
            ei.porda = s
        } nahole {
            ei.porda = "-" + ei.porda
        }
    }

    # 50 % is 0.5, and 200 + 10 % means 10% of 200
    kaj shotangsho() {
        dhoro x = shonkha(ei.porda) / 100
        jodi ei.chinho == "+" othoba ei.chinho == "-" {
            x = ei.prothom * shonkha(ei.porda) / 100
        }
        ei.porda = dekhte(x)
    }
}

# ---------------------------------------------------------------- the window
dhoro jontro = HisabJontro()

dhoro RONG = {"num": "#27322c", "fn": "#43514a", "op": "#0d6b49", "eq": "#e9a23b"}

# Each button: what it shows, the key it sends, and its color
dhoro SARI_GULI = [
    [["C", "C", "fn"], ["DEL", "back", "fn"], ["%", "%", "fn"], ["÷", "/", "op"]],
    [["7", "7", "num"], ["8", "8", "num"], ["9", "9", "num"], ["×", "*", "op"]],
    [["4", "4", "num"], ["5", "5", "num"], ["6", "6", "num"], ["−", "-", "op"]],
    [["1", "1", "num"], ["2", "2", "num"], ["3", "3", "num"], ["+", "+", "op"]],
    [["±", "+/-", "fn"], ["0", "0", "num"], [".", ".", "num"], ["=", "=", "eq"]]
]

dhoro amar_janala = janala("BE Calculator", 340, 560)
amar_janala.pechon("#16201b")

dhoro sutro = amar_janala.lekha("").rong("#94a39a").dane()
dhoro porda = amar_janala.lekha("0").akar(36).rong("white").dane()

dhoro chinho_botam = {}
protiti sari_ti SARI_GULI theke {
    dhoro ek_sari = amar_janala.sari()           # a row: its buttons sit side by side
    protiti b sari_ti theke {
        dhoro botam_ti = ek_sari.botam(b[0], kaj () { chap_dile(b[1]) })
        botam_ti.akar(18).pechon(RONG[b[2]]).rong("white")
        jodi b[2] == "eq" { botam_ti.rong("#20160a") }
        jodi b[2] == "op" { chinho_botam[b[1]] = botam_ti }
    }
}

dhoro itihash_lekha = amar_janala.lekha("").rong("#94a39a").dane()

# After every key: show the new screen, light up the waiting sign, update the history
kaj chap_dile(chabi_ti) {
    jontro.chap(chabi_ti)
    porda.bodlao(jontro.porda)
    sutro.bodlao(jontro.sutro)

    dhoro akar_ti = 36
    jodi lomba(jontro.porda) > 9 { akar_ti = 28 }
    jodi lomba(jontro.porda) > 12 { akar_ti = 22 }
    porda.akar(akar_ti)

    protiti s chabi(chinho_botam) theke {
        jodi jontro.notun ebong jontro.chinho == s {
            chinho_botam[s].pechon("white").rong(RONG["op"])
        } nahole {
            chinho_botam[s].pechon(RONG["op"]).rong("white")
        }
    }

    dhoro lekhar_sari = []
    protiti jinish ulta(jontro.itihash) theke {
        jodi lomba(lekhar_sari) < 4 {
            jukto(lekhar_sari, jinish.sutro + " " + jinish.fol)
        }
    }
    itihash_lekha.bodlao(jora(lekhar_sari, "\n"))
}

# The keyboard works too: chabi_ti is the key, like "5", "+", "Enter" or "Backspace"
dhoro CHABI_GULI = {"Enter": "=", "Backspace": "back", "Escape": "C", "Delete": "C", "x": "*", ",": "."}
amar_janala.chabi_chap(kaj (chabi_ti) {
    jodi chabi_ti moddhe CHABI_GULI {
        chabi_ti = CHABI_GULI[chabi_ti]
    }
    chap_dile(chabi_ti)
})

amar_janala.chalao()
