import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getToDos: build.query<TODO.GetTodosResponse, TODO.GetTodoRequest>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    addToDo: build.mutation<TODO.AddTodoResponse, TODO.AddTodoRequest>({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteToDo: build.mutation<TODO.DeleteTodoResponse, TODO.DeleteTodoRequest>({
      query: (_id) => ({
        url: `/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    UpdateToDo: build.mutation<TODO.UpdateTodoResponse, TODO.UpdateTodoRequest>({
      query: ({ _id, newData }) => ({
        url: `/${_id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetToDosQuery,
  useAddToDoMutation,
  useDeleteToDoMutation,
  useUpdateToDoMutation,
} = api;
