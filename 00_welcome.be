# Welcome to BE!
# The code is Banglish. Everything BE prints is in English.

dhoro nam = "Shuvo"
dekhao "Hello, {nam}!"

jodi lomba(nam) > 3 tahole {
    dekhao "That is a long name."
} nahole {
    dekhao "That is a short name."
}

ghuro 3 bar {
    dekhao "BE is fun"
}

shreni Manush {
    kaj shuru(nam) {
        ei.nam = nam
    }
    kaj parichoy() {
        ferot "Hi, I am {ei.nam}."
    }
}

dhoro rahim = Manush("Rahim")
dekhao rahim.parichoy()
