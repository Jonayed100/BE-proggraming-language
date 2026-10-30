# 15_text_tools.be - working with text

dhoro bakko = "  apple, banana, mango  "
dhoro shuddho = parishkar(bakko)
dekhao "Clean:", shuddho

dhoro fol_guli = bhag(shuddho, ", ")
dekhao "Split:", fol_guli, "count:", lomba(fol_guli)
dekhao "Joined:", jora(fol_guli, " + ")

dekhao boro_hater("shout"), choto_hater("QUIET")
dekhao bodlao("I like tea", "tea", "coffee")
dekhao "Where is 'an'?", kothay("banana", "an")
dekhao "Backwards:", ulta("stressed")
dekhao "Words:", bhag("one two   three")

dhoro email = "user@example.com"
jodi "@" moddhe email {
    dekhao "Looks like an email"
}
