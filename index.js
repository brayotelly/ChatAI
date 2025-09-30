import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function chat(prompt) {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    });
    console.log("AI:", response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example
chat("Hello! How are you?");

