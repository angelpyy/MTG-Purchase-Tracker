import os
from dotenv import load_dotenv
from bs4 import BeautifulSoup

def get_tcg_data():
    data = {
        # "Order Date": [],
        "Card Name": [],
        "Card Set": [],
        "Card Purchase Price": [],
        "Card Current Price": []
    }

    directory = "/Users/angel/Documents/Python Projects/TCG Investment Tracker /order history/tcgplayer"
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

        # first div that contains individual orders, find all
        order_items = soup.find_all('div', class_='orderWrap')

        # loop through each of the 'orderWrap' divs
        for order in order_items:

            # find the order date
            order_date_span = order.find('span', attrs={'data-aid': 'spn-sellerorderwidget-orderdate'})
            if order_date_span:
                order_date = order_date_span.text.strip()
                #print("Order Date:", order_date)

            # really scuffed html webscraping that i may or may not clean up
            orderTable = order.find('table', attrs={'data-aid': 'tbl-sellerorderwidget-ordertable'})
            tbody = orderTable.find('tbody')
            for row in tbody.find_all('tr'):
                order_history_item = row.find('td', attrs={'class': 'orderHistoryItems'})
                order_history_card = order_history_item.find('a', attrs={'class': 'nocontext'})
                order_history_set = order_history_item.find('span').contents[3].strip()
                order_history_price = row.find('td', attrs={'class': 'orderHistoryPrice'})
                if order_history_card and order_history_price and order_history_set:
                    # data["Order Date"].append(order_date)
                    data["Card Name"].append(order_history_card.get_text(strip=True))
                    data["Card Set"].append(order_history_set)
                    # print(order_history_price.get_text(strip=True))
                    data["Card Purchase Price"].append(order_history_price.get_text(strip=True).replace('$', ''))

    return data