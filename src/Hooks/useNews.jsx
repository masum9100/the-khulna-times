import { useEffect, useState } from "react"

const useNews = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://agn12ss-masum9100.vercel.app/news')
            .then(res => res.json())
            .then(data => {
                setNews(data)
                setLoading(false)
            })
    }, [])
    return[news, loading]
}

export default useNews