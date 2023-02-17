import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./components/app/App"
import { QuoteProvider } from "./contexts/quotes.context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<QuoteProvider>
			<App />
		</QuoteProvider>
	</React.StrictMode>
)
