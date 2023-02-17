import { useEffect, useState, createContext } from "react"

export const QuotesContext = createContext({
	quotes: null,
	currentQuote: null,
	setCurrentQuote: () => null,
})

export const QuoteProvider = ({ children }) => {
	const [quotes, setQuotes] = useState({})
	const [currentQuote, setCurrentQuote] = useState([])

	const getQuote = async () => {
		const quoteURL = `https://type.fit/api/quotes`

		try {
			const data = await fetch(quoteURL)
			const json = await data.json()

			setQuotes(json)
		} catch (error) {
			console.log("an error occurred", error)
		}
	}

	useEffect(() => {
		getQuote()
	}, [])

	const value = { currentQuote, setCurrentQuote, quotes }

	return (
		<QuotesContext.Provider value={value}>
			{children}
		</QuotesContext.Provider>
	)
}
