const express = require("express")
const cors = require("cors")
// const jwt = require("jsonwebtoken")
const { CardModel } = require("./db")
const { createSchema } = require("./types")

const PORT = 3000
// const JWT_SECRET = "123"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
	try {
		const cards = await CardModel.find({})
		if (!cards) {
			return res.status(404).json({ msg: "No cards found" })
		}
		return res.status(200).json(cards)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ msg: "Server error" })
	}
})

app.post("/", async (req, res) => {
	try {
		const createPayload = req.body
		const parsePayload = createSchema.safeParse(createPayload)
		if (!parsePayload.success) {
			return res.status(411).json({ msg: "Invalid inputs" })
		}
		await CardModel.create({
			name: createPayload.name,
			description: createPayload.description,
			interests: createPayload.interests,
		})
		return res.status(200).json({ msg: "Card created" })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ msg: "Server error" })
	}
})

app.put("/:id", async (req, res) => {
	const id = req.params.id
	const updatePayload = req.body
	const parsePayload = createSchema.safeParse(updatePayload)
	if (!parsePayload.success) {
		return res.status(411).json({ msg: "Invalid inputs" })
	}
	try {
		const cardExists = await CardModel.findById({
			_id: id,
		})
		if (!cardExists) {
			return res.status(404).json({ msg: "Card doesn't exist" })
		}
		await CardModel.findByIdAndUpdate(
			{
				_id: id,
			},
			{
				name: updatePayload.name,
				description: updatePayload.description,
				interests: updatePayload.interests,
			}
		)
		return res.status(200).json({ msg: "Card updated" })
	} catch (err) {
		console.log(err)
		return res.status(500).json({ msg: "Server error" })
	}
})

app.delete("/:id", async (req, res) => {
	const id = req.params.id
	try {
		const card = await CardModel.findOneAndDelete({
			_id: id,
		})
		if (!card) {
			return res.status(404).json({ msg: "Invalid card" })
		}
		return res.status(200).json({ msg: "Card deleted" })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ msg: "Server error" })
	}
})

app.use((err, req, res, next) => {
	return res.status(500).json({ msg: "Server error" })
})

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`)
})
