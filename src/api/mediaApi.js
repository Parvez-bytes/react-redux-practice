import axios from 'axios'
const UNPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

export async function fetchPhoto(query, per_page=15) {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
        params: {query,per_page},
        headers: {
            Authorization: `Client-ID ${UNPLASH_KEY}`
        },
    })
    return res.data.results
}

export async function fetchVideo(query,per_page=10){
    const res = axios.get('https://api.pexels.com/v1/videos/search',{
        params:{query,per_page},
        headers:{Authorization: PEXELS_KEY}
    })

    return res
}