import './styles.css';
import Header from '../../components/Header/index.js';
import TaskCard from '../../components/TaskCard';
import { useState } from 'react';

function Main({ allTasks, setAllTasks }) {
    const [inputNewTask, setInputNewTask] = useState('');

    const handleAddNewTask = () => {
        if (!inputNewTask) return;

        const newTask = {
            id: Math.floor(Math.random() * 10000),
            name: inputNewTask,
            description: 'Task description task description task description task description task description',
            owner: 'Rafaela Wessling',
        };

        setAllTasks([...allTasks, newTask]);
        setInputNewTask('');
    };

    return (
        <main>
            <Header />
            <div className="container-new-task">
                <input
                    value={inputNewTask}
                    onChange={event => setInputNewTask(event.target.value)}
                    type="text"
                    placeholder="Adicionar nova tarefa"
                />
                <button onClick={handleAddNewTask}>Adicionar</button>
            </div>

            <hr />

            <div className="container">
                {allTasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </main>
    );
}

export default Main;
