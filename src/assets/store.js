import { configureStore } from '@reduxjs/toolkit'
import { PasteSlice } from '../redux/PasteSlice'


export const store = configureStore({
  reducer: {
    paste:PasteSlice,
  },
})