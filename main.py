# program does not handle card variants (i did not save foil data or extended)
# but we can do secret lairs :)
import util
import pandas as pd
import tkinter as tk
import csv

# TODO: csv editor? for some reason? i'm not sure its really necessary for what i want
# tkinter gui :( // this sounds really hard and unnecessary :(

# Open Tkinter window
window = tk.Tk()
window.geometry("1200x800")
window.title("Stop Spending on Cardboard")

# open the file :p
with open('order history/mtg_stocks.csv', mode ='r')as file:
    # reading the CSV file
    csvFile = csv.reader(file)

    # Iterate over the lines of the CSV file
    for i, line in enumerate(csvFile):
        # Iterate over the values in each line
        for j, val in enumerate(line):
            # Create a label widget for each val
            label = tk.Label(window, text=val)
            label.grid(row=i, column=j)

window.mainloop()
