"use client";
import React, { useState } from "react";
import scss from "./ToDo.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useAddToDoMutation,
  useDeleteToDoMutation,
  useGetToDosQuery,
  useUpdateToDoMutation,
} from "@/redux/api/todo";
interface IToDoChat {
  task: string;
  discription: string;
  image: string;
}
interface IToDoChatUpdate {
  task: string;
  discription: string;
  image: string;
}

const ToDo = () => {
  const [addToDoMutationProduct] = useAddToDoMutation();
  const [updateToDoMutationProduct] = useUpdateToDoMutation();
  const [updateId, setUpdateId] = useState<number | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IToDoChat>();
  const { data } = useGetToDosQuery();
  const [deleteToDo] = useDeleteToDoMutation();
  const addToDoChat: SubmitHandler<IToDoChat> = async (data) => {
    const newToDo = {
      task: `${data.task}`,
      discription: `${data.discription}`,
      image: `${data.image}`,
    };
    await addToDoMutationProduct(newToDo);
    reset();
  };

  const updateIdToDo: SubmitHandler<IToDoChatUpdate> = async (data) => {
    updateToDoMutationProduct({ _id: updateId!, newData: data });
    setUpdateId(null);
    reset();
  };
  return (
    <div className={scss.todo}>
      <form onSubmit={handleSubmit(addToDoChat)}>
        <input
          type="text"
          placeholder="Add a new task"
          {...register("task", { required: true, minLength: 1 })}
        />
        <input
          type="text"
          placeholder="Add a new task"
          {...register("discription", { required: true, minLength: 2 })}
        />
        <input
          type="text"
          placeholder="Add a new task"
          {...register("image", { required: true, minLength: 5 })}
        />
        {isSubmitting ? (
          <button type="submit" disabled>
            Loading...
          </button>
        ) : (
          <button type="submit">Add Task</button>
        )}
      </form>

      {data &&
        data
          .map((todo, index) => (
            <div className="">
              <div key={index} className={scss.todo23}>
                <h2>{todo.task}</h2>
                <p>{todo.discription}</p>
                <img src={todo.image} alt="Task Image" />
                <button onClick={() => setUpdateId(todo._id!)}>Edit</button>
                <button onClick={() => deleteToDo(todo._id!)}>Delete</button>
              </div>
              {updateId === todo._id && (
                <form onSubmit={handleSubmit(updateIdToDo)} className={scss.formforedit}>
                  <input
                    type="text"
                    defaultValue={todo.task}
                    placeholder="Update Task"
                    {...register("task", { required: true, minLength: 1 })}
                  />
                  <input
                    type="text"
                    defaultValue={todo.discription}
                    placeholder="Update Description"
                    {...register("discription", {
                      required: true,
                      minLength: 2,
                    })}
                  />
                  <input
                    type="text"
                    defaultValue={todo.image}
                    placeholder="Update Image"
                    {...register("image", { required: true, minLength: 5 })}
                  />
                  {isSubmitting ? (
                    <button type="submit" disabled>
                      Loading...
                    </button>
                  ) : (
                    <button type="submit">update</button>
                  )}
                </form>
              )}
            </div>
          ))
          .reverse()}
    </div>
  );
};

export default ToDo;
