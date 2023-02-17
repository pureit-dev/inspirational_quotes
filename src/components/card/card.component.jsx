import { useEffect, useState } from "react"
import "./card.styles.css"

import Button from "../button/button.component"
import Quote from "../quote/quote.component"

const errorImage = {
	urls: {
		regular:
			"https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTA3NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzY1NDMzNDg&ixlib=rb-4.0.3&q=80&w=1080",
	},
}

const UNSPLASH_API = process.env.REACT_APP_UNSPLASH

const Card = () => {
	const [wallpaper, setWallpaper] = useState({urls: {regular: null}})
	const [isClicked, setIsClicked] = useState(false)
//apiKeys.unsplash
	const getWallpaper = async () => {
		const unsplashURL = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API}&orientation=landscape&query=nature`
		try {
			const data = await fetch(unsplashURL)
			const json = await data.json()

			setWallpaper(json)
		} catch (error) {
			console.log("an error occurred", error)
			setWallpaper(errorImage)
		}
	}

	useEffect(() => {
		getWallpaper()
	}, [])

	const styles = { backgroundImage: `url(${wallpaper.urls.regular})` }

	return (
		<>
			<div className="card-container" style={styles}>
				{!isClicked ? (
					<h1 className="card-heading">Inspirational Quotes</h1>
				) : (
					<Quote />
				)}
				<Button setIsClicked={setIsClicked} isClicked={isClicked} />
			</div>
		</>
	)
}

export default Card
