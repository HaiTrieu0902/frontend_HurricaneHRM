import { AsyncThunk, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { AuthUser } from '../types/auth.type';
import { ACCESS_TOKEN_KEY } from '../constants';
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

interface Auth {
    token: string | null;
    authUser: AuthUser;
}

const initialState: Auth = {
    token: null,
    authUser: {} as Required<AuthUser>,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getAccessToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        getAuthUser: (state, action: PayloadAction<AuthUser>) => {
            state.authUser = action.payload;
        },
        logout: (state) => {
            localStorage.setItem('accessToken', '');
            Cookies.remove(ACCESS_TOKEN_KEY);
            state.token = null;
        },
    },
    extraReducers(builder) {
        // builder.addCase(getUserSelects.fulfilled, (state, action) => {
        //     state.userSelectList = action.payload;
        // });
    },
});

export const { getAccessToken, logout, getAuthUser } = authSlice.actions;

export default authSlice.reducer;
