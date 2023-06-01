# this isnt really all that great in terms of organization :(

import requests
import pandas as pd
import tcgplayer, cardkingdom
from time import sleep as delay

# this function really turned to shit so fast
def get_price(card_name: str, card_set: str) -> int:
    # scryfall api search request
    price = -1

    if "-" in card_name:
        card_name = card_name.split("-")[0].strip()

    # check response status code
    response = requests.get(f'https://api.scryfall.com/cards/search?q="{card_name}" -is:digital')
    if response.status_code == 200:
        card_data = response.json()

        # card data
        if "data" in card_data:
            # Get the first card from the list of cards returned by the API
            card = card_data["data"][0]

            # Check if the 'prices' key is present in the card data
            if "prices" in card:
                # Get the USD price of the card, if available
                if "usd" in card["prices"]:
                    price = card["prices"]["usd"]
    else:
        # If the response was unsuccessful, print the status code
        print(f"Request failed with status code {card_name}: {response.status_code}")
        return price

    return price

def merge_dicts(dict1: dict, dict2: dict) -> dict:
    new_dict = {
        "Card Name": [],
        "Card Set": [],
        "Card Purchase Price": [],
        "Card Current Price": [],
    }

    new_dict["Card Name"] = dict1["Card Name"] + dict2["Card Name"]
    new_dict["Card Set"] = dict1["Card Set"] + dict2["Card Set"]
    new_dict["Card Purchase Price"] = (
        dict1["Card Purchase Price"] + dict2["Card Purchase Price"]
    )

    return new_dict

def strip_card_name(card_dict: dict) -> None:
    temp = card_dict["Card Name"]
    for i in range(0, len(temp)):
        # more jank ?

        if "(" in temp[i]:
            temp[i] = temp[i].split("(")[0].strip()

    if len(temp) == len(card_dict["Card Name"]):
        card_dict["Card Name"] = temp

def fill_current_price(card_dict: dict) -> None:
    # add pricing data 
    # find the current prices use excel to calc the difference after
    invalid_indexes = []
    card_names = card_dict["Card Name"]
    card_sets = card_dict["Card Set"]

    # get price of each card
    for i in range(len(card_names)):
        purchase_price = get_price(card_names[i], card_sets[i])

        # if the price = -1 then it is invalid and remove index
        if purchase_price == -1:
            invalid_indexes.append(i)

        card_dict["Card Current Price"].append(purchase_price)
        delay(0.5) # delay per the scryfall api

    # flip list for pop purposes
    invalid_indexes = invalid_indexes[::-1]

    # remove all invalid data
    for i in invalid_indexes:
        print("Removed: ", end='')
        print(card_dict["Card Name"].pop(i))
        card_dict["Card Set"].pop(i)
        card_dict["Card Purchase Price"].pop(i)
        card_dict["Card Current Price"].pop(i)
    #####################################################################################################################

def get_final_dict() -> dict:
    # form our dictonary and merge
    tcg_data = tcgplayer.get_tcg_data()
    ck_data = cardkingdom.get_ck_data()
    merged_data = merge_dicts(tcg_data, ck_data)

    # clean the card names up slightly
    strip_card_name(merged_data)
    fill_current_price(merged_data)

    return merged_data

def export_dict_csv(card_dict: dict) -> None:
    # create the dictionary/data frame. export as csv
    df = pd.DataFrame(card_dict)
    df.to_csv(r'/Users/angel/Documents/Python Projects/TCG Investment Tracker /order history/mtg_stocks.csv', index=True, header=True)
