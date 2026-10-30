# files.be - reading and writing files (computer only)

file_lekho("notes.txt", "First line\n")
file_jog("notes.txt", "Second line\n")
dekhao "File exists?", file_ache("notes.txt")

dhoro shob_lekha = file_porho("notes.txt")
protiti sari bhag(parishkar(shob_lekha), "\n") theke {
    dekhao "Read:", sari
}
