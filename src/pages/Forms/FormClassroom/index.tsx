import React, { useState, useEffect } from 'react';

import {
    Form,
    ContainerForm,
    HeaderForm,
    Button,
} from "../../../components/Form";

import { SuccessMessage, ErrorMessage } from '../../../components/Toast';

import { useNavigate, useParams } from 'react-router-dom';

import ClassroomService from '../../../services/ClassroomService';

const FormClassroom: React.FC = () => {
    const [classroom, setClassroom] = useState({
        id: null,
        nameClassroom: ''
    });
    
    const navigate = useNavigate();
    const paramsURL = useParams();

    const classroomService = new ClassroomService();
    
    useEffect(() => {
        const params = paramsURL.id;

        if(params) {
            classroomService.findClassroomByid(params)
            .then( response => {
                setClassroom({
                    id: response.data.id,
                    nameClassroom: response.data.name
                })
            }).catch( error => {
                console.log(error.response.data);
            })
        }
    }, [])

    const handleDataChange = (event: { target: { name: any; value: any; }; }) => {
        const name = event.target.name;
        const value = event.target.value;
        setClassroom(values => ({...values, [name]: value}));
    }

    const saveClassroom = () => {
        const classroomObj = {
            id: classroom.id || null,
            name: classroom.nameClassroom
        }
        
        classroomService.save(classroomObj).then( response => {
            SuccessMessage("Sala salva com sucesso");
            navigate("/classroom");
        }).catch( error => {
            ErrorMessage(error.response.data);
        })
    }

    const updateClassroom = () => {
        const classroomObj = {
            id: classroom.id as unknown as number,
            name: classroom.nameClassroom
        }

        classroomService.updateClassroom(classroomObj.id, classroomObj)
        .then( response => {
            SuccessMessage("Alterações salva com sucesso");
            navigate("/classroom");
        }).catch( error => {
            ErrorMessage(error.response.data);
        })
    }

    return (
        <Form>
            <ContainerForm>
                <HeaderForm>
                    {
                        classroom.id == null ? <h1>CADASTRO DE SALA</h1> : <h1>EDITAR SALA</h1>                   
                    }
                </HeaderForm>

                <hr/>

                <label htmlFor="nameClassroom">Nome da sala: </label>
                <input type="text" 
                    name="nameClassroom"
                    value={classroom.nameClassroom}
                    onChange={handleDataChange} 
                    placeholder='Digite o nome da sala'/>
                {
                    classroom.id == null 
                    ? 
                    <Button onClick={saveClassroom}>Salvar nova sala</Button>
                    :
                    <Button onClick={updateClassroom}>Salvar alterações</Button>
                }
            </ContainerForm>
        </Form>
    )
}

export default FormClassroom;