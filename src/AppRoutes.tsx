import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Classroom from './pages/Classroom';
import Home from './pages/Home';
import Student from './pages/Student';
import Teacher from './pages/Teacher';

import FormClassroom from './pages/Forms/FormClassroom';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/classroom" element={<Classroom/>}/>
                <Route path="/student" element={<Student/>}/>
                <Route path="/teacher" element={<Teacher/>}/>
                <Route path="/register-classroom" element={<FormClassroom/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;