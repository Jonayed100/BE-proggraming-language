# 09_guess_game.be - a number guessing game (jiggesh asks the user)
# Run it: be run examples/09_guess_game.be

dhoro gopon = elomelo(1, 50)
dhoro koybar = 0

dekhao "I am thinking of a number from 1 to 50."

jotokkhon sotti {
    dhoro uttor = jiggesh("Your guess? ")
    jodi uttor == "" {
        dekhao "No answer. Game over."
        thamo
    }

    # A wrong answer doesn't stop the program: chesta catches the mistake
    chesta {
        anuman = shonkha(uttor)
    } nahole {
        dekhao "'{uttor}' is not a number. Try again."
        agao
    }
    koybar += 1

    jodi anuman < gopon {
        dekhao "Higher!"
    } nahole jodi anuman > gopon {
        dekhao "Lower!"
    } nahole {
        dekhao "Correct! You got it in {koybar} tries."
        thamo
    }
}
