import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
    }),
    addTask: builder.mutation({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
    }),
  }),
});

export const { useGetProjectsQuery, useAddTaskMutation } = apiSlice;
