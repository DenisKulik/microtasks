import { useState } from 'react';
import './App.css';
import { Todolist } from './components/microtask_7/Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TaskStateType = {
    [taskId: string]: TaskType[]
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const App = () => {
    const todolistID1 = v1();
    const todolistID2 = v1();

    const [ todolists, setTodolists ] = useState<TodolistType[]>([
        { id: todolistID1, title: 'What to learn', filter: 'all' },
        { id: todolistID2, title: 'What to buy', filter: 'all' },
    ]);

    const [ tasks, setTasks ] = useState<TaskStateType>({
        [todolistID1]: [
            { id: v1(), title: 'HTML&CSS', isDone: true },
            { id: v1(), title: 'JS', isDone: true },
            { id: v1(), title: 'ReactJS', isDone: false },
            { id: v1(), title: 'Rest API', isDone: false },
            { id: v1(), title: 'GraphQL', isDone: false },
        ],
        [todolistID2]: [
            { id: v1(), title: 'HTML&CSS2', isDone: true },
            { id: v1(), title: 'JS2', isDone: true },
            { id: v1(), title: 'ReactJS2', isDone: false },
            { id: v1(), title: 'Rest API2', isDone: false },
            { id: v1(), title: 'GraphQL2', isDone: false },
        ]
    });


    function removeTask(id: string, todolistID: string) {
        const filteredTasks = tasks[todolistID].filter(t => t.id !== id);
        setTasks({ ...tasks, todolistID: filteredTasks });
    }

    function addTask(title: string, todolistID: string) {
        const task = { id: v1(), title: title, isDone: false };
        const newTasks = {
            ...tasks,
            todolistID: [ task, ...tasks[todolistID] ]
        };
        setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean, todolistID: string) {
        const task = tasks[todolistID].find(t => t.id === taskId);
        if (task) task.isDone = isDone;
        setTasks({ ...tasks });
    }

    function changeFilter(value: FilterValuesType, todolistID: string) {
        setTodolists(todolists.map(
            todolist => todolist.id === todolistID ?
                { ...todolist, filter: value } : todolist));
    }

    const todolistItems: JSX.Element[] = todolists.map(todolist => {
        let tasksForTodolist: TaskType[] = tasks[todolist.id];

        if (todolist.filter === 'active') {
            tasksForTodolist = tasks[todolist.id].filter(t => !t.isDone);
        }
        if (todolist.filter === 'completed') {
            tasksForTodolist = tasks[todolist.id].filter(t => t.isDone);
        }

        return (
            <Todolist
                key={ todolist.id }
                todolistID={ todolist.id }
                title={ todolist.title }
                tasks={ tasksForTodolist }
                filter={ todolist.filter }
                removeTask={ removeTask }
                changeFilter={ changeFilter }
                addTask={ addTask }
                changeTaskStatus={ changeStatus }
            />
        );
    });

    return (
        <div className="App">
            { todolistItems }
        </div>
    );
};

export default App;
