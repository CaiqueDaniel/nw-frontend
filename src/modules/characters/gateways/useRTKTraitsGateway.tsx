import { apiSlice } from '~/config/rtkquery/apiSlice';
import { TraitData, TraitsService } from '../services/TraitsService';

export function useRTKTraitsGateway(): TraitsService {
  const {
    useLazyGetBreedsQuery,
    useLazyGetClassesQuery,
    useLazyGetRankingsQuery,
  } = traitsApiSlice;
  const [rtkGetBreeds] = useLazyGetBreedsQuery();
  const [rtkGetClasses] = useLazyGetClassesQuery();
  const [rtkGetRankings] = useLazyGetRankingsQuery();

  return {
    getClasses: () => rtkGetClasses().unwrap(),
    getBreeds: () => rtkGetBreeds().unwrap(),
    getRankings: () => rtkGetRankings().unwrap(),
  };
}

export const CLASSES_API_SLICE = 'traits_classes';
export const BREEDS_API_SLICE = 'traits_races';
export const RANKINGS_API_SLICE = 'traits_rankings';

const traitsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      getClasses: builder.query<TraitData[], void>({
        query: () => `classes/basic`,
        providesTags: [CLASSES_API_SLICE],
      }),
      getBreeds: builder.query<TraitData[], void>({
        query: () => `breeds/basic`,
        providesTags: [BREEDS_API_SLICE],
      }),
      getRankings: builder.query<TraitData[], void>({
        query: () => `rankings/basic`,
        providesTags: [RANKINGS_API_SLICE],
      }),
    };
  },
});
