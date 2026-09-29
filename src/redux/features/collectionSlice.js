import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    //items will be array
    items: JSON.parse(localStorage.getItem('collection')) || []

}

const collectionSlice = createSlice({
    name: 'collection',
    initialState:initialState,
    reducers:{
        addCollection:(state,action)=>{
           const alreadyExists = state.items.find(
            item => item.id == action.payload.id
           )

           if(!alreadyExists){
            state.items.push(action.payload)
            localStorage.setItem('collection', JSON.stringify(state.items))            
           }
        },
        removeCollection:(state,action)=>{
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
            
        },
        cleearCollection:(state,action)=>{
            state.items = []
            localStorage.removeItem('collection')
        },
    }
})

export  const {addCollection, removeCollection, cleearCollection} = collectionSlice.actions
export default collectionSlice.reducer