import React, { useState, useEffect } from 'react';

import {
    Form,
    ContainerForm,
    HeaderForm,
    Button,
} from '../../../components/Form';

import { SuccessMessage, ErrorMessage } from '../../../components/Toast';

import { useNavigate, useParams } from 'react-router-dom';
import TeacherService from '../../../services/TeacherService';
import ClassroomService from '../../../services/ClassroomService';

const FormTeacher: React.FC = () => {
    const [classrooms, setClassrooms] = useState([{
        id: 0,
        name: ''
    }]);
    
    const [teacher, setTeacher] = useState({
        id: null,
        name: '',
        idClassroom: 0 
    });

    const navigate = useNavigate();
    const paramsURL = useParams();
    const teacherService = new TeacherService();
    const classroomService = new ClassroomService();

    useEffect(() => {
        const params = paramsURL.id;

        if(params) {
            teacherService.findTeacherById(params)
            .then( response => {
                let Teacher = {
                    id: response.data.id,
                    name: response.data.name,
                    classroom: response.data.classroom
                }
                
                if (!Teacher.classroom) {
                   Teacher.classroom = 0
                   console.log(Teacher.classroom)
                }

                setTeacher({
                    id: Teacher.id,
                    name: Teacher.name,
                    idClassroom: Teacher.classroom.id
                })
            }).catch( error => {
                console.log(error);
            })
        }
    }, [])

    useEffect(() => {
        classroomService.list()
        .then( response => {
            setClassrooms(response.data);
        }).catch( error => {
            console.log(error.response.data);
        })
    }, []);

    const handleDataChange = (event: { target: { name: any; value: any; }; }) => {
        const name = event.target.name;
        const value = event.target.value;
        setTeacher(values => ({...values, [name]: value}));
    }

    const sendTeacher = () => {
        teacherService.save(teacher)
        .then( response => {
            SuccessMessage("Professor salvo com sucesso");
            navigate("/teacher");
        }).catch( error => {
            ErrorMessage(error.response.data);
        });
    }

    const updateTeacher = () => {
        let idTeacher = teacher.id as unknown as number;
        teacherService.updateTeacher(idTeacher, teacher)
        .then( response => {
            SuccessMessage("Alterações salva com sucesso");
            navigate("/teacher");
        }).catch( error => {
            ErrorMessage(error.response.data)
        });
    }

    return (
        <Form>
            <ContainerForm>
                <HeaderForm>
                    {
                        teacher.id == null ? <h1>CADASTRO DE PROFESSOR</h1> : <h1>EDITAR PROFESSOR</h1>
                    }
                </HeaderForm>

                <hr/>

                <label>Nome do Professor:</label>
                <input type="text" 
                    name="name"
                    value={teacher.name}
                    onChange={handleDataChange}
                    placeholder="Digite o nome do professor"/>
                
                <select name="idClassroom" 
                    value={teacher.idClassroom} 
                    onChange={handleDataChange}>
                    
                    <option value="0">Nenhuma Sala Selecionada</option>
                    {
                        classrooms.map((classroom, index) => {
                            return (
                                <option key={index} 
                                    value={classroom.id}>{classroom.name}</option>
                            )
                        }) 
                    }
                </select>
                {
                    teacher.id == null 
                    ?
                    <Button onClick={sendTeacher}>Salva novo professor</Button>
                    :
                    <Button onClick={updateTeacher}>Salvar alterações</Button>
                }
            </ContainerForm>
        </Form>
    )
}

export default FormTeacher;