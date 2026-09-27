import { useSelector } from "react-redux"
import { fetchPhoto, fetchVideo, fetchGif } from "../api/mediaApi"
import { setQuery, setLoading, setError, setResults } from "../redux/features/searchSlice"
import { useEffect } from "react"

const ResultGrid = () => {
    const { query, activeTabs, results, loading, error } = useSelector((store) => store.search)

    useEffect(function () {
        const getData = async () => {
            if (!query) return
            let data

            if (activeTabs == 'photos') {
                let res = await fetchPhoto(query)
                data = res.map((item) => {
                    return {
                        id: item.id,
                        type: "photo",
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                    };
                });
            }

            if (activeTabs == 'videos') {
                let res = await fetchVideo(query)
                data = res.data.videos.map((item)=>({
                    id: item.id,
                    type:'video',
                    title:item.user.name || 'video' ,
                    thumbnail:item.image,
                    src:item.video_files[0].link
                }))
            }

            if (activeTabs == 'gif') {
                let res = await fetchGif(query)
                data = res.map((item)=>({
                    id:item.id,
                    type:'gif',
                    title:item.title || 'GIF',
                    thumbnail:item.media_formats.tinygif.url,
                    src:item.media_formats.gif.url
                }))
            }
            console.log(data);
        }
        getData()
    }, [query, activeTabs])

    return (
        <div>
            <button className='bg-pink-800 p-2 rounded'>Get Data</button>
        </div>
    )
}

export default ResultGrid