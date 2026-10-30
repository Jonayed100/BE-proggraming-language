# 03_jodi_nahole.be - decisions with jodi / nahole

dhoro nombor = 78

jodi nombor >= 80 {
    dekhao "Grade: A+"
} nahole jodi nombor >= 70 {
    dekhao "Grade: A"
} nahole jodi nombor >= 60 {
    dekhao "Grade: A-"
} nahole jodi nombor >= 33 {
    dekhao "Grade: Pass"
} nahole {
    dekhao "Grade: Fail"
}

# ebong (and), othoba (or), na (not)
dhoro boyosh = 20
dhoro nid_ache = sotti

jodi boyosh >= 18 ebong nid_ache tahole {
    dekhao "You can vote"
}

jodi boyosh < 13 othoba boyosh > 60 {
    dekhao "You get a discount"
} nahole {
    dekhao "No discount"
}

jodi na nid_ache {
    dekhao "Get an ID card first"
}

# moddhe: is something inside a list, text or dictionary?
dhoro rong = ["red", "green"]
jodi "green" moddhe rong {
    dekhao "green is in the list"
}
