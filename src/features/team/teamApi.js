import apiSlice from "../api/apiSlice";

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get team members
    getTeamMembers: builder.query({
      // query url
      query: () => "/team",
    }),
  }),
});

export const { useGetTeamMembersQuery } = teamApi;
