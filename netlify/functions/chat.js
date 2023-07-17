import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const { location } = JSON.parse(event.body);

  try {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Can you recommend 4 popular places for open water swimming near ${location}. Preface your response with 'Sure, here are some popular open water swimming locations near (nearest town or city)' followed by the characters \n. Please be detailed in your response and don't mention the Latitude or Longitude of the recommendations. could you create it as only a JSON object with the name of the location, the latitude, longitude and description as separate items, and remove the introduction sentence`,
        },
      ],
    });

    const response = JSON.parse(res.data.choices[0].message.content);
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong" }),
    };
  }
};