# 17_json.be - JSON, the format websites and APIs use to send data

dhoro chhatro = {"nam": "Shuvo", "nombor": [80, 92], "shokriyo": sotti}

dhoro json_lekha = json_banao(chhatro)
dekhao "As JSON:", json_lekha

dhoro sundor = json_banao(chhatro, sotti)
dekhao sundor

dhoro ferot_elo = json_porho(json_lekha)
dekhao "Name:", ferot_elo.nam, "| First mark:", ferot_elo.nombor[0]
