/* eslint-disable react/prop-types */
import React from "react"
import "./Card.css"

export const Card = ({ name, description, interests }) => {
	let id = -1
	return (
		<div className="card">
			<h1 className="name">{name}</h1>
			<div className="desc">{description}</div>
			<div className="ta">TA in the 100xdevs Cohort 2.0</div>
			<h3>Interests</h3>
			<div className="ul">
				<ul>
					{interests.map((interest) => {
						return (
							<React.Fragment key={++id}>
								<li>{interest}</li>
							</React.Fragment>
						)
					})}
				</ul>
			</div>
			<div className="button">
				<button
					className="linkedin"
					style={{
						backgroundColor: "#0578F4",
						color: "white",
						border: "none",
					}}
				>
					LinkedIn
				</button>
				<button
					className="twitter"
					style={{
						backgroundColor: "#0578F4",
						color: "white",
						border: "none",
					}}
				>
					Twitter
				</button>
			</div>
		</div>
	)
}
