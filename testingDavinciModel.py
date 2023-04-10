# I'm going to try testing a GPT model in Python to see if it gives me a more detailed error message because it's getting frustrating seeing the status 400 over and over again

import os
import openai

openai.api_key = os.getenv("API_KEY")

response = openai.Completion.create(
    model="text-davinci-003",
    prompt="Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\nOutput: send-msg `find constance` Do we need some bread?\n\nReach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
    temperature=0,
    max_tokens=100,
    top_p=1.0,
    frequency_penalty=0.2,
    presence_penalty=0.0,
    stop=["\n"]
)
