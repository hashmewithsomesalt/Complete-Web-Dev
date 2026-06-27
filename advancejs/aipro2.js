import OpenAi from "openai"
import dotenv from "dotenv"

const openai = new OpenAI()

const messages = [
    {
        role: 'system',
        content: 'You are helpful assistant that explains things in language a 10-year-old understand. Your answers are always less than 100 words.'
    }, 
    {
        role: 'user',
        content: 'What is Quantum Computing?'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages
})

console.log(response)

