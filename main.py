# program does not handle card variants (i did not save foil data or extended)
# but we can do secret lairs :)

import util, tcgplayer, cardkingdom
import pandas as pd
import tkinter as tk
import time

# init
#####################################################################################################################
# form our dictonary and merge
#tcg_data = tcgplayer.get_tcg_data()
#ck_data = cardkingdom.get_ck_data()
#merged_data = util.dict_merge(tcg_data, ck_data)

# clean the card names up slightly
#util.strip_name(merged_data)
#####################################################################################################################

# tkinter gui :(
#TODO: csv editor? for some reason? i'm not sure its really necessary for what i want
#####################################################################################################################
window = tk.Tk()

greeting = tk.Label(text="Hello, Tkinter")
greeting.pack()

window.mainloop()

#####################################################################################################################