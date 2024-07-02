const mongoose = require("mongoose")

const connectDB = async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/card_db")
		console.log(`Connected to MongoDB`)
	} catch (err) {
		console.log("Failed to connect to database")
	}
}

connectDB()

const Schema = mongoose.Schema

// const adminSchema = new Schema({
// 	email: String,
// 	password: String,
// })

const cardSchema = new Schema({
	name: String,
	description: String,
	interests: {
		type: [String],
		default: [],
	},
})

const CardModel = mongoose.model("cards", cardSchema)
// const AdminModel = mongoose.model("admin", adminSchema)

module.exports = {
	CardModel,
	// AdminModel,
}
