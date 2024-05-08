import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
    cusData:localStorage.getItem("cusData") ? JSON.parse(localStorage.getItem("cusData")) : null,
};

const profileSlice = createSlice({
    name:"profile",
    initialState: initialState,
    reducers: {
        setUser(state, value) {          
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
        setCusDetail(state, value) {
            state.cusData = value.payload;
        }
    },
});

export const {setUser, setLoading,setCusDetail} = profileSlice.actions;
export default profileSlice.reducer;