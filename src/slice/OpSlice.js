import { configureStore, createSlice } from "@reduxjs/toolkit";

const cpFigurasSlice = createSlice({
    name:'ap',
    initialState:{
        numeroUno: 0,
        numeroDos:0,
        PerimetroRectangulo:0,
        AreaRectangulo:0
    },
    reducers:{
        setNumeroUno(state,action){
            state.numeroUno = action.payload
        },
        setNumeroDos(state,action){
            state.numeroDos = action.payload
        },
        setRectanguloPerimetro(state){
            state.PerimetroRectangulo = 2 * (state.numeroUno+state.numeroDos)
        },
        setRectanguloArea(state){
            state.AreaRectangulo = state.numeroUno * state.numeroDos
        }
    }
})

export const { setNumeroUno,setNumeroDos,setRectanguloPerimetro,setRectanguloArea } = cpFigurasSlice.actions

const store = configureStore({
    reducer:{
        ap:cpFigurasSlice.reducer
    }
})

export default store