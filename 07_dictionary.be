# 07_dictionary.be - dictionaries (key -> value)

dhoro chhatro = {
    "nam": "Shuvo",
    "boyosh": 22,
    "university": "NSU"
}

dekhao "Name:", chhatro["nam"]
dekhao "Age:", chhatro.boyosh        # .key works too

chhatro["shohor"] = "Dhaka"
chhatro.boyosh = 23
dekhao chhatro

protiti chabi_nam chhatro theke {
    dekhao chabi_nam, "=", chhatro[chabi_nam]
}

dekhao "Keys:", chabi(chhatro)
dekhao "Values:", man(chhatro)
dekhao "Has a city?", "shohor" moddhe chhatro
