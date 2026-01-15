import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import readLine from "../components/readLine.js"
import envConfig from "../envConfig.js"

console.log("Initializing Model...")
const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: envConfig.gemini
})
console.log("Invoking the Model...")
const question = await readLine("Ask anything:")
console.log("Gemimi 2.5 Flash is Generating a Response...")
const response = model.invoke(question).then(message => {
  console.log(message.text)
})
.catch(reason => {
  console.log(reason.message)
})
