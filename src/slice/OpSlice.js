import  { configureStore, createSlice } from "@reduxjs/toolkit"

const sumaSlice = createSlice({
    name:'suma',
    initialState:{
        numeroUNo: 0,
        numeroDos:0,
        resultado:0
    },
    reducers:{
        setNumeroUno(state,action){
            state.numeroUNo = action.payload
        },
        setNumeroDos(state,action){
            state.numeroDos = action.payload
        },
        setResultado(state,action){
            state.resultado = state.numeroUNo + state.numeroDos
        }
    }
})

export const {setNumeroDos, setNumeroUno, setResultado} = sumaSlice.actions

const store = configureStore({
    reducer:{
        suma:sumaSlice.reducer
    }
})

export default store

