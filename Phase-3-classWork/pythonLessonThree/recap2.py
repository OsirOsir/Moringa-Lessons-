"""a program to generate random names"""

import random

first_name = ("josephine", "shalyne", "ian", "caleb",
              "gilbert", "billy", "mike", "lewis")
last_name = ("ogot", "cheruyiot", "ndungu", "karimi",
             "ngeny", "koech", "osir", "omondi")


while True:
    first_random = random.choice(first_name)
    last_random = random.choice(last_name)
    print(f"{first_random} {last_random}")

    try_again = input(
        "\n Try again, press 'Enter' to continue or press 'q'to quit ")

    if try_again.lower() == 'q':
        break
