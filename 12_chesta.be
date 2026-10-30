# 12_chesta.be - handling mistakes with chesta / nahole, and chhuro

chesta {
    dekhao 10 / 0
} nahole bhul {
    dekhao "Caught a mistake:", bhul
}

kaj nirapod_bhag(a, b) {
    chesta {
        ferot a / b
    } nahole {
        ferot kichuna
    }
}
dekhao "10 / 2 =", nirapod_bhag(10, 2)
dekhao "10 / 0 =", nirapod_bhag(10, 0)

# chhuro raises your own error
kaj boyosh_dao(boyosh) {
    jodi boyosh < 0 {
        chhuro "Age can't be negative"
    }
    ferot boyosh
}

chesta {
    boyosh_dao(-5)
} nahole bhul {
    dekhao "Error:", bhul
}

# Turn text into numbers, with a default when it fails
protiti shobdo ["42", "abc", "7.5"] theke {
    dhoro n = 0
    chesta {
        n = shonkha(shobdo)
    }
    dekhao "'{shobdo}' -> {n}"
}
