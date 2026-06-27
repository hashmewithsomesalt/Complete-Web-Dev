import OpenAI from "openai"
import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"

dotenv.config()
/* 
const genai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
}) */

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})
 
/* to check what models are available to use

async function main() {
    const models = await openai.models.list()
    for (const model of models.data) {
        console.log(model.id)
    }

}
main() */

/* async function  listModels() {
    const models = await genai.models.list()
    for await (const model of models) {
        console.log(model.name)
    }
} */

const messages = [
    {
        role: 'system',
        content: 'You are a helpful general knowledge expert.'
    },
    {
        role: 'user',
        content: 'Who invented the television?'
    }
]

const response = await openai.chat.completions.create({
    model:'gpt-4',//model we are using
    messages: messages
}) 

console.log(response.choices[0].message.content)

//snapshots: the best model available at that configuration


