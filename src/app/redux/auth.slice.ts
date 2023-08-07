import { AsyncThunk, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../constants';
import { loginAPI } from '../service/api/auth';
import { AuthUser, IParamLogin } from '../types/auth.type';
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

export const loginAuthAPI = createAsyncThunk('login/loginAPI', async (param: IParamLogin) => {
    const data = await loginAPI(param);
    return data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getAccessToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        logout: (state) => {
            localStorage.setItem('accessToken', '');
            Cookies.remove(ACCESS_TOKEN_KEY);
            state.token = null;
        },
    },
    extraReducers(builder) {
        builder.addCase(loginAuthAPI.fulfilled, (state, action) => {
            state.authUser = action.payload?.data;
        });
    },
});

export const { getAccessToken, logout } = authSlice.actions;

export default authSlice.reducer;
