import {useEffect, useState} from 'react'
import { apiKeys } from '../../utils/apiKeys'
import './card.styles.css'

const initialImage = {
        urls: {
            regular: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTA3NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzY1NDMzNDg&ixlib=rb-4.0.3&q=80&w=1080",
      }
    }

const Card = ({children}) => {
    const [wallpaper, setWallpaper] = useState(initialImage)
    
    const getWallpaper = async () => {
        const unsplashURL = `https://api.unsplash.com/photos/random?client_id=${apiKeys.unsplash}&orientation=landscape&query=nature`
        // try {
        //     const data = await fetch(unsplashURL)
        //     const json = await data.json()
            
        //     setWallpaper(json)
            
        // } catch (error) {
        //     console.log("an error occurred", error)
        // }
    }
    
    useEffect(() => {
        getWallpaper()

    }, [])

    const styles = {backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url(${wallpaper.urls.regular})`}

    return (
       <div className="card-container" style={styles}>
        {children}
       </div>
    )
}

export default Card;
