import {createSlice} from '@reduxjs/toolkit'


const retrieveTodos = () => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}

const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
}


const initialState = retrieveTodos();
// {id: 1, title: "Learn React", completed: false}
const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            state.push({id: Date.now(), title: action.payload, completed: false})
            saveTodos(state);
        },
        removeTodo: (state, action) => {
            const todo = state.filter(todo => todo.id !== action.payload)
            saveTodos(todo);
            return todo;
        },
        toggleTodo: (state, action) => {
            const todo = state.map(todo =>{
                if(todo.id == action.payload){
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            })
            saveTodos(todo);
            return todo;
        }
    }
})

export default todoSlice.reducer;
export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;
