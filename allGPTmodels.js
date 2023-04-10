const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

// THE FOLLOWING 2 FUNCTIONS OUTPUT ALL THE GPT ENGINES/MODELS
// define function to get number of available engines
async function getNumEngines() {
  try {
    const response = await openai.listEngines();
    console.log(response.data) // Use this to output the array itself
    return response.data.data.length;
  } catch (error) {
    console.log(error);
  }
}
// loop through and output all the models
async function loopEngines() {
  const numEngines = await getNumEngines();
  for (let i = 0; i < numEngines; i++) {
    try {
      const response = await openai.listEngines();
      console.log(response.data.data[i].id);
    } catch (error) {
      console.log(error);
    }
  }
}

loopEngines(); // Calling the function