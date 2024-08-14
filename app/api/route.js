import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { NextResponse } from "next/server";

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function GET(req) {
  try {
    if (!endpoint || !apiKey || !model) {
      throw new Error("Missing environment variables");
    }

    const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

    const messages = [
      {
        role: "system",
        content: "you are a helpful assistant",
      },
      {
        role: "user",
        content: "Why is javascript better than Python",
      },
    ];

    const response = await client.getChatCompletions(model, messages, {
      maxTokens: 128,
    });

    return NextResponse.json({
      message: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
