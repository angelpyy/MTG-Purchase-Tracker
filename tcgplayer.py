import os
from dotenv import load_dotenv

# Load the environment variables from the .env file
load_dotenv()

# Access the environment variables using os.getenv()
username = os.getenv('TCGPLAYER_USERNAME')
password = os.getenv('TCGPLAYER_PASSWORD')

print(username)