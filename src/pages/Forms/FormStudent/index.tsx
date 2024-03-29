import React, { useState, useEffect } from 'react';

import {
    Form,
    ContainerForm,
    HeaderForm,
    Button,
} from '../../../components/Form';

import { SuccessMessage, ErrorMessage } from '../../../components/Toast';

import { useNavigate, useParams } from 'react-router-dom';
import StudentService from '../../../services/StudentService';
import TeacherService from '../../../services/TeacherService';

const FormStudent: React.FC = () => {
    const [teachers, setTeachers] = useState([{
        id: 0,
        name: '',
        classroom: {} || null
    }]);

    const [student, setStudent] = useState({
        id: null,
        name: '',
        idTeacher: 0
    });

    const navigate = useNavigate();
    const paramsURL = useParams();
    
    const studentService = new StudentService();
    const teacherService = new TeacherService();

    useEffect(() => {
        teacherService.list()
        .then( response => {
            setTeachers(response.data);
        }).catch( error => {
            console.log(error.response.data);
        })
    }, [])

    useEffect(() => {
        const params = paramsURL.id;

        if(params) {
            studentService.findStudentById(params)
            .then( response => {
                let Student = response.data;

                if(!Student.teacher) {
                    Student.teacher = 0;
                    setStudent(Student);
                }

                setStudent({
                    id: Student.id,
                    name: Student.name,
                    idTeacher: Student.teacher.id
                })
            }).catch( error => {
                console.log(error);
            })
        }
    }, [])

    const handleDataChange = (event: { target: { name: any; value: any; }; }) => {
        const name = event.target.name;
        const value = event.target.value;
        setStudent(values => ({...values, [name]: value}))
    }

    const sendStudent = () => {
        studentService.save(student)
        .then( response => {
            SuccessMessage("Aluno salvo com sucesso");
            navigate("/student")
        }).catch( error => {
            ErrorMessage(error.response.data);
        })
    }

    const updateStudent = () => {
        let idStudent = student.id as unknown as number;
        studentService.updateStudent(idStudent, student)
        .then( response => {
            SuccessMessage("Alterações salvas com sucesso");
            navigate("/student");
        }).catch( error => {
            ErrorMessage(error.response.data)
        })
    }

    return (
        <Form>
            <ContainerForm>
                <HeaderForm>
                    {student.id == null ? <h1>CADASTRO DE ALUNO</h1> : <h1>EDITAR ALUNO</h1>}
                </HeaderForm>

                <hr/>

                <label htmlFor="name">Nome do aluno</label>
                <input type="text" 
                    name="name"
                    value={student.name}
                    onChange={handleDataChange}
                    placeholder="Digite o nome do aluno"/>
                
                <select name="idTeacher" value={student.idTeacher} onChange={handleDataChange}>
                    <option value="0">Nenhum Professor Selecionado</option>
                    {Object.entries(teachers).map(([index, teacher]) => {
                        if (teacher.classroom !== null) {
                            return (
                                <option key={index} value={teacher.id}>{teacher.name}</option>
                            )
                        }
                    })}
                </select>
                {
                    student.id == null
                    ?
                    <Button onClick={sendStudent}>Salvar novo aluno</Button>
                    :
                    <Button onClick={updateStudent}>Salvar Alterações</Button>
                }
            </ContainerForm>
        </Form>
    )
}

export default FormStudent;