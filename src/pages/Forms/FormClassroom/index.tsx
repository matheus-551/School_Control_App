import React, { useState, useEffect } from 'react';

import {
    Form,
    ContainerForm,
    HeaderForm,
    Button,
} from "../../../components/Form";

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FormClassroom: React.FC = () => {
    const [classroom, setClassroom] = useState({
        id: null,
        nameClassroom: ''
    });
    
    const navigate = useNavigate();
    const paramsURL = useParams();
    const URL = "http://localhost:8080/api/classroom";
    
    useEffect(() => {
        const params = paramsURL.id;

        if(params) {
            axios.get(`${URL}/${params}`)
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
        axios.post(URL, {
            name: classroom.nameClassroom
        }).then( response => {
            navigate("/classroom");
        }).catch( error => {
            console.log(error.response.data);
        })
    }

    const updateClassroom = () => {
        axios.put(`${URL}/${classroom.id}`, {
            id: classroom.id,
            name: classroom.nameClassroom
        }).then( response => {
            navigate("/classroom");
        }).catch( error => {
            console.log(error.response.data);
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