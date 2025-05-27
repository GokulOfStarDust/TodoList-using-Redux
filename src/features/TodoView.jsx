import React,{useState} from 'react'
import {addTodo, removeTodo, toggleTodo} from './TodoSlice'
import {useSelector, useDispatch} from 'react-redux'
import '../index.css'

export const TodoView = () => {
    const todos = useSelector((state) => state.todoList)
    const dispatch = useDispatch()
    const [text, setText] = useState("")

    return(
        <main className='flex flex-col items-center justify-baseline h-screen bg-gray-100'>
            <h1 className='w-100vw text-black font-family-vt323 text-7xl py-36 text-center'>Todo List</h1>
           
                <div className='flex flex-row items-center justify-between mb-3.5'>
                    <input 
                    type="text" 
                    id='todo-input'
                    className='relative w-[90vw] sm:w-[80vw] h-[10svh] min-h-11 pl-6 font-mono rounded-xl focus:outline-2 focus:outline-offset-2 focus:black p-4 pr-14 text-black border-[1px] border-gray-600'
                    onChange={(event)=>setText(event.target.value)} 
                    value={text}
                    placeholder='Enter your task ^-^'/>

                    <button onClick={() => { text === "" ? console.log("Please enter a task") :  dispatch(addTodo(text))
                         setText("")}} 
                        className='absolute right-[8vw] sm:right-[11vw] bg-gray-200 hover:bg-[#121212] rounded-2xl rounded-l-4xl' 
                        >
                        <p className='hover:text-white p-4'>+</p>
                    </button>
                </div>

                <div className='w-[88vw] flex overflow-y-auto flex-col items-center justify-start gap-y-1.5 '>
                        {todos.map(todo => {
                            return(
                                todo.title != "" && 
                                (<div key={todo.id} className={`w-[86vw] sm:w-[76vw] flex flex-row items-center justify-between border-[1px] rounded-2xl p-4 ${todo.completed ? 'bg-green-300' : ''}`}>
                                    <p className={`text-black text-sm sm:text-xl font-mono ${todo.completed ? 'line-through' : ''}`}>{todo.title}</p>
                                    <div className={`flex flex-row items-center justify-between gap-x-2 `}>
                                        <input id='task-done-check' type="checkbox" checked={todo.completed} onChange={()=>dispatch(toggleTodo(todo.id))} className={`size-6 accent-green-300` }/>   
                                        <button onClick={()=>dispatch(removeTodo(todo.id))} className='group'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 h-8 hover:fill-white'>
                                                <path className='group-hover:fill-red-600' fill="#241f31" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/>
                                            </svg>
                                        </button>

                                    </div>
                                </div>)
                            )
                        })}
                </div>
            

        </main>
    )
}

export default TodoView;