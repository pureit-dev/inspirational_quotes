import {useEffect, useState} from 'react'

const Quote = () => {

    const [quotes, setQuotes] = useState('')

    const getQuote = async () => {
        const quoteURL = `https://zenquotes.io/api/quotes/`
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

    return (
        <p>Quote</p>
    )
}

export default Quote;
