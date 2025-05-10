import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pastes : localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) :[]
}

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    AddToPastes: (state , action) => {

    },
    UpdateAllPastes: (state , action) => {

    },
    ResetPastes: (state, action) => {

    },
    RemovePastes:(state , action)=>{

    },
  },
})


export const { AddToPastes, UpdateAllPastes, ResetPastes,RemovePastes } = PasteSlice.actions

export default PasteSlice.reducer