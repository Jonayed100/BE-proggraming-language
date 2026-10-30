# 05_kaj.be - functions

kaj shuveccha(nam) {
    dekhao "Good morning, " + nam + "!"
}

shuveccha("Rahim")
shuveccha("Karim")

# ferot gives a result back
kaj jog(a, b) {
    ferot a + b
}
dekhao "5 + 7 =", jog(5, 7)

# An input can have a default value
kaj obhibadon(nam, shuru = "Hello") {
    ferot "{shuru}, {nam}!"
}
dekhao obhibadon("Shuvo")
dekhao obhibadon("Shuvo", "Welcome")
dekhao obhibadon(shuru = "Hi", nam = "Mitu")   # named inputs, in any order

# A function can call itself (recursion)
kaj kromogun(n) {
    jodi n <= 1 {
        ferot 1
    }
    ferot n * kromogun(n - 1)
}
dekhao "5! =", kromogun(5)
dekhao "20! =", kromogun(20)

kaj fibonacci(n) {
    jodi n < 2 {
        ferot n
    }
    ferot fibonacci(n - 1) + fibonacci(n - 2)
}

dhoro prothom_guli = []
ghuro i = 0 theke 10 {
    jukto(prothom_guli, fibonacci(i))
}
dekhao "Fibonacci:", prothom_guli
