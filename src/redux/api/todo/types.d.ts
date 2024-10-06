namespace TODO {
    type GetTodosResponse = {
        _id?: number;
        task: string,
    discription: string,
    image: string,
      }[];
      type GetTodoRequest = void;
      ////////////////////////////////////////////////////////////////////////////////////////////////
      type AddTodoResponse = {
        _id: number;
        task: string,
    discription: string,
    image: string,
      }[];
      type AddTodoRequest = {
        task: string,
    discription: string,
    image: string,
      };

  type DeleteTodoResponse = void;
  type DeleteTodoRequest = number;

  type UpdateTodoResponse = {
    _id: number;
    task: string,
    discription: string,
    image: string,
  };
  type UpdateTodoRequest = {
    _id: number;
    newData: {
        task: string,
        discription: string,
        image: string,
    };
  };
}
