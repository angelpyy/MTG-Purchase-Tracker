# program does not handle card variants (i did not save foil data or extended)
# but we can do secret lairs :)
import util
import csv
import pandas as pd
import tkinter as tk
from tkinter import ttk

class Window:
    def __init__(self):
        # Initialize the window and small things
        self.root = tk.Tk()
        self.root.geometry("1200x800")
        self.root.title("Stop Spending on Cardboard")

        # Create a scrollbar
        scrollbar = tk.Scrollbar(self.root)
        scrollbar.pack(side='right', fill='y')

        # Create a canvas with scrollbar
        self.canvas = tk.Canvas(self.root, width=300, height=200, background='white', yscrollcommand=scrollbar.set)
        self.canvas.pack(side='left', fill='both', expand=True)

        # Configure the scrollbar to scroll the canvas
        scrollbar.config(command=self.canvas.yview)

        # Create a frame inside the canvas for the labels
        frame = tk.Frame(self.canvas)
        self.canvas.create_window((0, 0), window=frame, anchor='nw')

        df = pd.read_csv('order history/mtg_stocks.csv')
        # Iterate over the rows of the DataFrame
        for i, row in df.iterrows():
            # Iterate over the values in each row
            for j, val in enumerate(row):
                # Create a label widget for each value
                label = tk.Label(frame, text=val)
                label.grid(row=i, column=j)

        self.root.mainloop()

# TODO: csv editor? for some reason? i'm not sure its really necessary for what i want
Window()