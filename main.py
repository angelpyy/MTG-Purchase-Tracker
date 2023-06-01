import tkinter as tk
import csv

def create_csv_window():
    # Create a new Tkinter window
    window = tk.Tk()
    window.geometry("1200x800")
    window.title("CSV Viewer")

    # Open the file
    with open('order history/mtg_stocks.csv', mode='r') as file:
        # Read the CSV file
        csvFile = csv.reader(file)

        # Iterate over the lines of the CSV file
        for i, line in enumerate(csvFile):
            # Iterate over the values in each line
            for j, val in enumerate(line):
                # Create a label widget for each val
                label = tk.Label(window, text=val)
                label.grid(row=i, column=j)

    # Run the Tkinter event loop
    window.mainloop()

# Call the function to create the window
create_csv_window()
