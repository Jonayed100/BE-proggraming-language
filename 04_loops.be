# 04_loops.be - repeating things

# ghuro ... bar: repeat a number of times
ghuro 3 bar {
    dekhao "Hello"
}

# ghuro ... theke: count from 1 to 5
ghuro i = 1 theke 5 {
    dekhao "Round", i
}

# dhap: count in steps
ghuro i = 0 theke 10 dhap 2 {
    dekhao "Even number:", i
}

# Counting down happens by itself
ghuro i = 3 theke 1 {
    dekhao i, "..."
}
dekhao "Go!"

# jotokkhon: repeat while something is true
dhoro taka = 1
jotokkhon taka < 100 {
    taka = taka * 2
}
dekhao "Money:", taka

# protiti: every item of a list
dhoro fol = ["mango", "jackfruit", "lychee"]
protiti f fol theke {
    dekhao "I like", f
}

# thamo (break) and agao (continue)
ghuro i = 1 theke 10 {
    jodi i == 3 {
        agao        # skip 3
    }
    jodi i == 6 {
        thamo       # stop at 6
    }
    dekhao "i =", i
}
