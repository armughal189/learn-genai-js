import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import envConfig from "../envConfig"
import readLine from "../components/readLine"
import { HumanMessage, SystemMessage } from "@langchain/core/messages"

console.log("Initializing...")
const ai = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: envConfig.gemini
})
const question = await readLine("Ask something about React Native:")
const response = ai.invoke([
  new SystemMessage("You are a React Native Expert. Explain things in simple terms."),
  new HumanMessage(question)
])
console.log("Gemini 2.5 Flash (React Native Master) is Generating a response...")
response.then(value => {
console.log(value.content )
}).catch(reason => {
  console.log(reason.message)
})
