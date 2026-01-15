import dotenv from "dotenv"

dotenv.config()
const envConfig = {
  gemini: process.env.GEMINI_API_KEY
}

export default envConfig