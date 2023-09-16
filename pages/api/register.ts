import { NextApiRequest, NextApiResponse } from "next"
import bcrypt from "bcrypt"
import prismadb from "@/lib/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("req", req)
  console.log("res", res)

  try {
    if (req.method === "POST") {
      const { name, email, password } = req.body
  
      const existingUser = await prismadb.user.findUnique({
        where: {
          email
        }
      })
  
      if (existingUser) {
        return res.status(422).json({ error: "Email taken" })
      }
  
      const hashedPassword = await bcrypt.hash(password, 12)
  
      const user = await prismadb.user.create({
        data: {
          name,
          email,
          hashedPassword,
          image: "",
          emailVerified: new Date(),
        }
      })

      console.log("name", name)
      console.log("email", email)
      console.log("password", password)
  
      return res.status(200).json(user)
    } else {
      res.status(405).end()
    }
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` })
  }
}