// All the popular models keep returning a 400 error meaning they are always full of requests. I made this script to test a less popular babbage model

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const testTextSimilarityBabbage = async () => {
  const engine = 'text-davinci-003';
  const prompt1 = 'apple';
  const prompt2 = 'orange';

  // Create API instance
  const api = new OpenAIApi(configuration);

  try {
    // Test text similarity
    const response = await api.createCompletion({
      model: engine,
      prompt: `${prompt1}\n${prompt2}`,
      temperature: 0,
      max_tokens: 1,
      n: 1,
      stop: '',
    });

    console.log(response.choices[0].text);
  } catch (err) {
    console.error(err);
  }
}

testTextSimilarityBabbage();
