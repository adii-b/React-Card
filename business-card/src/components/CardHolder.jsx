import { useEffect, useState } from "react"
import { Card } from "./Card"

const CardHolder = () => {
	const [card, setCard] = useState([])
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch("http://localhost:3000/")
				const data = await response.json()
				console.log(data)
				setCard(data)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [])
	return (
		<div>
			{card.map((cards) => {
				return (
					<Card
						key={cards._id}
						name={cards.name}
						desc={cards.description}
						interests={cards.interests}
					/>
				)
			})}
		</div>
	)
}

export default CardHolder
