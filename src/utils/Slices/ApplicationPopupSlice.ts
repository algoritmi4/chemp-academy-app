import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
}

export const applicationPopup = createSlice({
  name: 'applicationPopup',
  initialState,
  reducers: {
    popupOpened: (state) => ({
      ...state, isOpen: true
    }),
    popupClosed: (state) => ({
      ...state, isOpen: false
    })
  }
})

export const { popupOpened, popupClosed } = applicationPopup.actions;
