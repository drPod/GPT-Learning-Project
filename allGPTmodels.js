const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()

const configuration = new Configuration({
  apiKey: process.env.API_KEY, // The API key is locally stored in a hidden .env file
});

const openai = new OpenAIApi(configuration);

// THE FOLLOWING 2 FUNCTIONS OUTPUT ALL THE GPT ENGINES/MODELS
// define function to get number of available engines
async function getNumEngines() {
  try {
    const response = await openai.listEngines();
    // console.log(response.data) // Use this to output the array itself
    return response.data.data.length;
  } catch (error) {
    console.log(error);
  }
}
// loop through and output all the models
async function loopEngines() {
  const numEngines = await getNumEngines();
  let output = ''; // Create a variable to store the output of this function
  for (let i = 0; i < numEngines; i++) {
    try {
      const response = await openai.listEngines();
      const engineId = response.data.data[i].id;
      output += `${engineId}\n`; // Append the engine ID to the output variable
    } catch (error) {
      console.log(error);
    }
  }
console.log(output); // This outputs the loopEngines function in the terminal

// Writes the output of the loopEngines to allGPTmodels.txt
const fs = require('fs'); // Import the fs library

fs.writeFile('allGPTmodels.txt', output, (err) => {
  if (err) throw err;
  console.log('allGPTmodels.txt has been updated with the OpenAIs newest models');
});
}

loopEngines(); // Calls the function