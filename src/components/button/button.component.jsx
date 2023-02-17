import { useContext } from "react"
import "./button.styles.css"
import { QuotesContext } from "../../contexts/quotes.context"

const Button = ({ isClicked, setIsClicked }) => {
	const { setCurrentQuote, quotes } = useContext(QuotesContext)

	const handleClick = () => {
		setIsClicked(true)
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
		if (randomQuote.author === null) {
			randomQuote.author = "Unknown"
		}
		setCurrentQuote(randomQuote)
	}

	return (
		<button className="quote-button" onClick={() => handleClick()}>
			{!isClicked ? `Inspire Me` : `Inspire Me Again!`}
		</button>
	)
}

export default Button
