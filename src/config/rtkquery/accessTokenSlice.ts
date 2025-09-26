import { createSlice } from '@reduxjs/toolkit';

export const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState: { token: '', userRoles: [] },
  reducers: {
    setAccessToken: (state, action) => {
      state.token = action.payload;
    },
    setUserRoles: (state, action) => {
      state.userRoles = action.payload;
    },
  },
});

export const selectAccessToken = (state: State) => state.accessToken.token;
export const selectUserRoles = (state: State) => state.accessToken.userRoles;
export const { setAccessToken, setUserRoles } = accessTokenSlice.actions;

type State = { accessToken: { token: string; userRoles: string[] } };
