/* const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 7,
}); */

/* const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    //apiKey: process.env.OPENAI_API_KEY,
    // school account - apiKey: "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"
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 7,
})
  .then(response => {
    console.log(response.data.choices[0].text);
  })
  .catch(error => {
    console.log(error);
  }); */

  /*
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  
  const openai = new OpenAIApi(configuration);
  
  openai.createCompletion({
    engine: "text-davinci-002",
    prompt: "Once upon a time, there was a brave knight",
    maxTokens: 64,
    n: 1,
    stop: "\n",
    temperature: 0.5,
  }).then((response) => {
    console.log(response.data.choices[0].text);
  }).catch((error) => {
    console.log(error);
  });
  */

/*
THE FOLLOWING CODE OUTPUTS THE FOLLOWING: {object: 'list', data: Array(50)} I STILL HAVE NO CLUE WHAT THIS MEANS


  const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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"
});

const openai = new OpenAIApi(configuration);

openai.listEngines()
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
*/

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

