import os
from dotenv import load_dotenv
from bs4 import BeautifulSoup

def get_ck_data():
    data = {
        # "Order Date": [],
        "Card Name": [],
        "Card Set": [],
        "Card Purchase Price": [],
        "Card Current Price": []
    }

    directory = "/Users/angel/Documents/Python Projects/TCG Investment Tracker /order history/cardkingdom"
    # loop through file directory for .html files
    for filename in os.listdir(directory):
        if '.html' not in filename:
            continue

        # grab path to html file
        file_path = os.path.join(directory, filename)
        with open(file_path, 'r') as file:
            html_content = file.read()

        # bs4 html parser
        soup = BeautifulSoup(html_content, 'html.parser')

        # find div that contains the order list
        order_wrapper = soup.find('div', class_="invoiceListWrapper")
        
        # find all the tr elemnts containing all details each
        singles_lists = order_wrapper.findAll('tr', valign='top')

        # go through each tr, note: there are more than there are cards
        for single in singles_lists:
            details = single.findAll('td')
            
            # check the class attr and make sure it contains a card, feels so jank
            if(details[0].get('class') != ['Description']):
                continue
            
            temp = details[0].text.split(": ")
            order_history_card = temp[0].strip()
            order_history_set = temp[1].strip()
            order_history_price = details[3].text.replace('$', '').strip()

            if order_history_card and order_history_price and order_history_set:
                data["Card Name"].append(order_history_card)
                data["Card Set"].append(order_history_set)
                data["Card Purchase Price"].append(order_history_price)
    return data