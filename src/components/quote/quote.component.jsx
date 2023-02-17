import { useContext, useState } from "react"
import { QuotesContext } from "../../contexts/quotes.context"
import './quote.styles.css'

const Quote = () => {
    const {currentQuote} = useContext(QuotesContext)
    
    return (
        <div className="quote-container">
            <q className="quote-text">{currentQuote.text}</q>
            <p className="quote-author">{currentQuote.author}</p>
        </div>
    )
}

export default Quote
