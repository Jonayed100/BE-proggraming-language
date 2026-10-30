# 06_list.be - lists

dhoro nombor = [45, 82, 67, 91, 38]

dekhao "List:", nombor
dekhao "First:", nombor[0]
dekhao "Last:", nombor[-1]
dekhao "How many:", lomba(nombor)

nombor[1] = 85
dekhao "After change:", nombor

jukto(nombor, 73)
dekhao "After adding:", nombor
dhoro bad_porlo = bad_dao(nombor)
dekhao "Removed:", bad_porlo, "left:", nombor

dekhao "Total:", jogfol(nombor)
dekhao "Average:", gol(jogfol(nombor) / lomba(nombor), 2)
dekhao "Biggest:", boro(nombor), "Smallest:", choto(nombor)
dekhao "Sorted:", shajao(nombor)
dekhao "Backwards:", ulta(nombor)
dekhao "Position of 91:", kothay(nombor, 91)

# A list inside a list
dhoro chhok = [[1, 2, 3], [4, 5, 6]]
dekhao "grid[1][2] =", chhok[1][2]
