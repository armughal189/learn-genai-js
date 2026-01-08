const { ChatGoogleGenerativeAI } = require("@langchain/google-genai")
const dotenv = require("dotenv").config()

console.log("Initializing Model...")
const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GEMINI_API_KEY
})
console.log("Invocing the Model...")
const response = model.invoke("Explain Generative AI in 5 Lines.").then(message => {
  console.log(message.text)
})
.catch(reason => {
  console.log(reason.message)
})
