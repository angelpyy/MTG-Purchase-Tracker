# program does not handle card variants (i did not save foil data or extended)
# but we can do secret lairs :)
import util
import csv
import pandas as pd
import tkinter as tk
from tkinter import ttk


# TODO: csv editor? for some reason? i'm not sure its really necessary for what i want
# tkinter gui :( // this sounds really hard and unnecessary :(

# Open Tkinter window
window = tk.Tk()
window.geometry("1200x800")
window.title("Stop Spending on Cardboard")

"""
# reallyyyyy slow scroll bar. anyway im done w this csv thingy, i should be good from here, time TODO: data stuff
# Create Frame
main_frame = tk.Frame(window)
main_frame.pack(fill='both', expand=1)

# Create Canvas
my_canvas = tk.Canvas(main_frame)
my_canvas.pack(side='left', fill='both', expand=1)

# Add scrollbar
scrollbar = ttk.Scrollbar(main_frame, orient='vertical', command=my_canvas.yview)
scrollbar.pack(side='right', fill='y')

# Configure Canvas
my_canvas.config(yscrollcommand=scrollbar.set)
my_canvas.bind('<Configure>', lambda e: my_canvas.config(scrollregion=my_canvas.bbox("all")))

# Frame inside canvas
sub_frame = tk.Frame(my_canvas)

# Add new frame to window in canvas
my_canvas.create_window((0,0), window=sub_frame, anchor='nw')
"""

# open the file :p
with open('order history/mtg_stocks.csv', mode ='r')as file:
    # reading the CSV file
    csvFile = csv.reader(file)

    # Iterate over the lines of the CSV file
    for i, line in enumerate(csvFile):
        # Iterate over the values in each line
        for j, val in enumerate(line):
            # Create a label widget for each val
            label = tk.Label(sub_frame, text=val)
            label.grid(row=i, column=j)



window.mainloop()
