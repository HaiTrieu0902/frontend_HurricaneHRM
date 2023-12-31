export const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
export const APIHost = development ? '/api' : 'https://google.com';
export const ACCESS_TOKEN_KEY = 'token';
export const SET_SIZE_ICON = '18px';
export const SET_COLOR_ICON_LIGHT = '#39a2db';
export const SET_COLOR_ICON_DARK = '#ffffff';
