import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/index.js';
import TaskDetail from './pages/TaskDetail/index.js';
import { useState } from 'react';

function MainRoutes() {
    const [allTasks, setAllTasks] = useState([]);

    return (
        <Routes>
            <Route path="/" element={<Main allTasks={allTasks} setAllTasks={setAllTasks} />} />
            <Route path="/task-detail/:id" element={<TaskDetail allTasks={allTasks} />} />
        </Routes>
    );
}

export default MainRoutes;
