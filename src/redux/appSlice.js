import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        open: false,
        emails: [],
        selectedEmail: null
    },
    reducers: {
        setOpen: (state, action) => {
            // console.log(action.payload);
            state.open = action.payload;
        },
        setEmails: (state, action) => {
            // console.log(action.payload);
            state.emails = action.payload;
        },
        setSelectedEmail: (state, action) => {
            console.log('setSelectedEmail');
            
            console.log(action.payload);
            state.selectedEmail = action.payload;

        }
    }
});

export const { setOpen, setEmails, setSelectedEmail } = appSlice.actions;

export const appReducer = appSlice.reducer;