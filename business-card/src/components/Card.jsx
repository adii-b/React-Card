/* eslint-disable react/prop-types */
import React from "react"

export const Card = ({ name, description, interests }) => {
	let id = -1
	return (
		<div>
			<h1>{name}</h1>
			<div>{description}</div>
			<h3>Interests</h3>
			<ul>
				{interests.map((interest) => {
					return (
						<React.Fragment key={++id}>
							<li>{interest}</li>
						</React.Fragment>
					)
				})}
			</ul>
			<button>LinkedIn</button>
			<button>Twitter</button>
		</div>
	)
}
