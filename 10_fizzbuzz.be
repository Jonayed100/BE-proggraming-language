# 10_fizzbuzz.be - FizzBuzz, a classic programming test

ghuro i = 1 theke 15 {
    jodi i % 15 == 0 {
        dekhao "FizzBuzz"
    } nahole jodi i % 3 == 0 {
        dekhao "Fizz"
    } nahole jodi i % 5 == 0 {
        dekhao "Buzz"
    } nahole {
        dekhao i
    }
}
