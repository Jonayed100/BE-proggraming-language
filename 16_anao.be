# 16_anao.be - using functions from another file
# anao runs the other file, so its functions and variables can be used here.

anao "lib/hishab.be"

dekhao "Square of 7:", borgo(7)
dekhao "Average:", gor([10, 20, 30, 40])
dekhao "Circle area (r = 2):", gol(PI * borgo(2), 2)
