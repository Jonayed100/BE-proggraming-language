# python_library.be - using Python libraries from BE (computer only)
# python("name") gives you any Python library. Some come with Python;
# others you install first, like:  pip install requests

dhoro gonit = python("math")
dekhao "Pi:", gonit.pi
dekhao "Square root of 2:", gonit.sqrt(2)

dhoro tarikh = python("datetime")
dhoro aj = tarikh.date.today()
dekhao "Today is", aj.isoformat()

dhoro porisonkhyan = python("statistics")
dekhao "Median:", porisonkhyan.median([3, 1, 4, 1, 5])

# Named inputs work with Python too
dhoro json = python("json")
dekhao json.dumps({"nam": "Shuvo", "boyosh": 22}, indent = 2)
