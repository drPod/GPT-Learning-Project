# GPT Learning Project

This GitHub project is designed to help individuals learn more about GPT (Generative Pre-trained Transformer) models, one of the most advanced and powerful natural language processing (NLP) models in use today.

## Overview

This project was initially intended for **NodeJS** but was switched to **Python** because of Python's use of error checksums. It also contains **JSON** and **git** configuration files for publishing purposes.

## Purpose of the Project

The purpose of this project is to provide a comprehensive resource for individuals who want to learn more about GPT models and their applications in natural language processing. By gaining a deeper understanding of these models, individuals can leverage their potential upsides while being aware of their potential downsides.

AI, including GPT models, has the potential to revolutionize many industries, from healthcare to finance, by automating repetitive tasks and providing insights that humans may have missed. However, with this potential comes potential downsides, such as job displacement and privacy concerns.

Therefore, it is crucial to stay up to date with the latest technology and understand its potential impacts. This project aims to facilitate learning and discussion around AI, specifically GPT models, to help individuals make informed decisions and contribute to the responsible development and deployment of AI. By providing accessible resources for learning, we hope to contribute to a community of informed and responsible AI users and developers.

## Contents

OpenAI has developed many nueral engines each suited for a different purpose. The script _allGPTmodels.js_ uses the function getNumEngines() to evaluate the number of engines OpenAI has created. It then loops through the array storing said engines in the loopEngines() module and outputs them in a local terminal. Finally, the script uses the fs library to write the output of of the loopEngines() modules to a text file: _allGPTmodels.txt_.

Each GPT model can be called from different modules. The _testingTheBabbageModel.js_ file script calls the Babbage model and the _testingDavinciModel.py_ calls the Davinci model.

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions could include additional scripts or improvements to existing content.

## License

This project is licensed under the MIT License. Feel free to use and modify the code as you see fit.
