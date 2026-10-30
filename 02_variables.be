# 02_variables.be - variables and math

dhoro boyosh = 22
dhoro uchchota = 5.6
dhoro shohor = "Dhaka"
dhoro chhatro = sotti

dekhao "Age:", boyosh
dekhao "Height:", uchchota
dekhao "City:", shohor
dekhao "Student?", chhatro

# Change a variable (no dhoro the second time). dhoro is optional anyway.
boyosh = boyosh + 1
dekhao "Next year I will be", boyosh

# Short forms: += -= *= /=
taka = 100
taka += 50
taka -= 30
taka *= 2
dekhao "Money:", taka

dekhao "10 + 3 =", 10 + 3
dekhao "10 - 3 =", 10 - 3
dekhao "10 * 3 =", 10 * 3
dekhao "10 / 4 =", 10 / 4
dekhao "10 % 3 =", 10 % 3, "(remainder)"
dekhao "(2 + 3) * 4 =", (2 + 3) * 4

# Text + number makes text
dekhao "I am " + boyosh + " years old"

# What type is each value?
dekhao dhoron(boyosh), dhoron(shohor), dhoron(chhatro), dhoron(kichuna)
