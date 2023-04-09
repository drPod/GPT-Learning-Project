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

const { Configuration, OpenAIApi } = require("openai");

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
  });