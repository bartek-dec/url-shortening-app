import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://api.shrtco.de/v2/shorten?url';

const getLocalStorage = () => {
    const links = localStorage.getItem('links');
    if (!links) {
        return [];
    }
    return JSON.parse(links);
}

const initialState = {
    isLoading: false,
    inputLink: '',
    isInputEmpty: false,
    isError: false,
    errorMsg: '',
    links: getLocalStorage()
}

export const getShortLink = createAsyncThunk('form/getShortLink', async (link, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading());
    try {
        const {data} = await axios.get(`${url}=${link}`);
        return data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue('Something went wrong. Please provide correct URL.')
    }
});

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setIsLoading: (state) => {
            state.isLoading = true;
        },
        setInputLink: (state, action) => {
            state.inputLink = action.payload;
        },
        setIsInputEmpty: (state, action) => {
            state.isInputEmpty = action.payload;
        },
        setIsError: (state, action) => {
            state.isError = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getShortLink.pending, (state) => {
            state.isError = false;
        }).addCase(getShortLink.fulfilled, (state, action) => {
            state.isLoading = false;
            const shortLink = action.payload.result.full_short_link;
            const link = state.inputLink;
            state.links = [{link, shortLink}, ...state.links];
            localStorage.setItem('links', JSON.stringify(state.links));
        }).addCase(getShortLink.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMsg = action.payload;
        })
    }
});

export const {setIsLoading, setInputLink, setIsInputEmpty, setIsError} = formSlice.actions;
export default formSlice.reducer;