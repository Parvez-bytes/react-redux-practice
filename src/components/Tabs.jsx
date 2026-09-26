import { useDispatch, useSelector } from "react-redux"
import { setActiveTabs } from "../redux/features/searchSlice"

const Tabs = () => {

    const tabs = ['photos', 'videos', 'GIF']
    const dispatch = useDispatch()
    const activeTabs = useSelector((state) => state.search.activeTabs)

    return (
        <div className="flex gap-5 p-10">
            {tabs.map((elem, idx) => {
                return (
                    <button
                        className={`${(activeTabs == elem? 'bg-blue-700' : 'bg-gray-500')} transition cursor-pointer active:scale-95 p-2 rounded uppercase`}
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTabs(elem))
                        }}
                    >
                        {elem}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs