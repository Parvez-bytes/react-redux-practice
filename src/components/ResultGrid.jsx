import { useDispatch, useSelector } from "react-redux"
import { fetchPhoto, fetchVideo, fetchGif } from "../api/mediaApi"
import { setQuery, setLoading, setError, setResults } from "../redux/features/searchSlice"
import { useEffect } from "react"
import ResultCard from "./ResultCard"

const ResultGrid = () => {
    const { query, activeTabs, results, loading, error } = useSelector((store) => store.search)
    const dispatch = useDispatch()

    useEffect(function () {
        const getData = async () => {
            try {
                if (!query) return
                dispatch(setLoading())
                let data = []

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
                    data = res.data.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link
                    }))
                }

                if (activeTabs == 'gif') {
                    let res = await fetchGif(query)
                    data = res.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        title: item.title || 'GIF',
                        thumbnail: item.media_formats.tinygif.url,
                        src: item.media_formats.gif.url
                    }))
                }
                // console.log(data);
                dispatch(setResults(data))
            }
            catch (err) {
                dispatch(setError(err))
            }
        }
        getData()
    }, [query, activeTabs])

    if (!query) return <h1 className="text-5xl text-center text-red-800">Search Something...</h1>
    if (error) return <h1 className="text-5xl text-center text-red-800">Error</h1>
    if (loading) return <h1 className="text-5xl text-center text-yellow-800">Loading...</h1>

    return (
        <div>
            {results.map((item, idx) => {
                return (
                    <div key={idx}>
                        <ResultCard />

                    </div>
                )
            })}
        </div>
    )
}

export default ResultGrid