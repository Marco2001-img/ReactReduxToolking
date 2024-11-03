import  { configureStore, createSlice } from "@reduxjs/toolkit"

const sumaSlice = createSlice({
    name:'suma',
    initialState:{
        numeroUNo: 0,
        numeroDos:0,
        resultadoSuma:0,
        resultadoResta:0,
        resultadoMultiplicacion:0,
        resultadoDivicion:0,
        limpiar:''
    },
    reducers:{
        setNumeroUno(state,action){
            state.numeroUNo = action.payload
        },
        setNumeroDos(state,action){
            state.numeroDos = action.payload
        },
        setResultadoSuma(state){
            state.resultado = state.numeroUNo + state.numeroDos,
            state.resultadoResta = state.numeroUNo - state.numeroDos,
            state.resultadoMultiplicacion = state.numeroUNo * state.numeroDos,
            state.resultadoDivicion = state.numeroUNo / state.numeroDos
        }
    }
})

export const {setNumeroDos, setNumeroUno, setResultadoSuma, setLimpiar} = sumaSlice.actions

const store = configureStore({
    reducer:{
        suma:sumaSlice.reducer
    }
})

export default store

