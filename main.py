# program does not handle card variants (i did not save foil data or extended)
# but we can do secret lairs :)
import util
import csv
import pandas as pd
import tkinter as tk
from tkinter import ttk

class Window:
    def __init__(self):
        # init the window and small things
        self.root = tk.Tk()
        self.root.geometry("1200x800")
        self.root.title("Stop Spending on Cardboard")

        self.canvas = tk.Canvas(self.root, width=300, height=200, background='white')

        df = pd.read_csv('order history/mtg_stocks.csv')
        # Iterate over the rows of the DataFrame
        for i, row in df.iterrows():
            # Iterate over the values in each row
            for j, val in enumerate(row):
                # Create a label widget for each value
                label = tk.Label(self.canvas, text=val)
                label.grid(row=i, column=j)

        self.canvas.grid(row=0, column=0)

        self.canvas.pack(side='left')
        self.root.mainloop()


# TODO: csv editor? for some reason? i'm not sure its really necessary for what i want
Window()