# 11_templates.be - values inside text

dhoro nam = "Rahim"
dhoro nombor = [78, 85, 92]

# Any calculation can go inside { }
dekhao "{nam}'s marks: {nombor}"
dekhao "Total: {jogfol(nombor)}, count: {lomba(nombor)}"
dekhao "Average: {gol(jogfol(nombor) / lomba(nombor), 1)}"

# To show plain braces, write \{ and \}
dekhao "This is not a template: \{nam\}"

# A long line can continue on the next line when that line starts with +
dhoro chithi = "Dear {nam}, "
    + "your total is {jogfol(nombor)}."
dekhao chithi
