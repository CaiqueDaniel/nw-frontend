import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CLASSES_API_SLICE = 'traits_classes';
export const BREEDS_API_SLICE = 'traits_races';
export const RANKINGS_API_SLICE = 'traits_rankings';

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: [
    CLASSES_API_SLICE,
    BREEDS_API_SLICE,
    RANKINGS_API_SLICE
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers, api) => {
      headers.set('Authorization', `Bearer ${(api.getState() as any).accessToken.token}`);
    },
  }),
  endpoints: () => ({}),
});

