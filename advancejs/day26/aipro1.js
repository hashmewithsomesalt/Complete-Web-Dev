import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config({
    path: "/.env"
})

const googlegemini = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

console.log(process.env.GEMINI_API_KEY)