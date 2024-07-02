import React, { useState } from "react"

export const Input = () => {
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [interest1, setInterest1] = useState("")
	const [interest2, setInterest2] = useState("")
	const [interestArray, setInterestArray] = useState([])

	const formSubmit = async () => {
		setInterestArray([interest1, interest2])
		console.log(interestArray)
		const response = await fetch("http://localhost:3000/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				description: description,
				interests: interestArray,
			}),
		})
		const data = await response.json()
		console.log(data)
	}

	return (
		<React.Fragment>
			<form action="">
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					name="name"
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="description">Description: </label>
				<input
					type="text"
					name="description"
					onChange={(e) => setDescription(e.target.value)}
				/>
				<label htmlFor="interest1">Interest 1: </label>
				<input
					type="text"
					name="interest1"
					onChange={(e) => setInterest1(e.target.value)}
				/>
				<label htmlFor="interest2">Interest 2: </label>
				<input
					type="text"
					name="interest2"
					onChange={(e) => setInterest2(e.target.value)}
				/>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault()
						formSubmit()
					}}
				>
					Submit
				</button>
			</form>
		</React.Fragment>
	)
}
