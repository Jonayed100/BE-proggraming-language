# 13_shreni.be - classes (shreni) and objects

shreni Hisab {
    # shuru runs when a new object is made
    kaj shuru(malik, taka = 0) {
        ei.malik = malik
        ei.taka = taka
    }

    kaj joma(poriman) {
        jodi poriman <= 0 {
            chhuro "Deposit must be more than 0"
        }
        ei.taka += poriman
    }

    kaj tolo(poriman) {
        jodi poriman > ei.taka {
            chhuro "Not enough money"
        }
        ei.taka -= poriman
    }

    kaj bivoron() {
        ferot "{ei.malik} has {ei.taka} taka"
    }
}

# A shreni can come from another one and add to it
shreni SonchoyHisab theke Hisab {
    kaj shuru(malik, taka = 0, har = 5) {
        upor.shuru(malik, taka)
        ei.har = har
    }

    kaj munafa_jog() {
        ei.taka += ei.taka * ei.har / 100
    }

    kaj bivoron() {
        ferot upor.bivoron() + " (savings, {ei.har}%)"
    }
}

dhoro a = Hisab("Rahim", 500)
a.joma(250)
dekhao a.bivoron()

chesta {
    a.tolo(5000)
} nahole bhul {
    dekhao "Error:", bhul
}

dhoro s = SonchoyHisab("Mitu", 1000)
s.munafa_jog()
dekhao s.bivoron()
dekhao dhoron(s), s.taka
