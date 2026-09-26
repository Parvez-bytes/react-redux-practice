import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, settext] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setQuery(text))
        settext('')
    }

    return (
        <div className='w-full'>
            <form onSubmit={(e) => { submitHandler(e) }} className='flex gap-5 p-10 bg-gray-900'>
                <input required className='flex-1 border-2 px-4 py-2 text-xl rounded outline-none' type="text" placeholder='search...' value={text} onChange={(e) => { settext(e.target.value) }} />
                <button className='cursor-pointer active:scale-95'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar