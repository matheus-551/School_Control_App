import React, { useState } from 'react';

import {
    Form,
    ContainerForm,
    HeaderForm,
    Button,
} from "../../../components/Form";

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormClassroom: React.FC = () => {
    const [classroom, setClassroom] = useState({
        id: null,
        nameClassroom: ''
    });
    
    const navigate = useNavigate();
    const URL = "http://localhost:8080/api/classroom";
    
    const handleDataChange = (event: { target: { name: any; value: any; }; }) => {
        const name = event.target.name;
        const value = event.target.value;
        setClassroom(values => ({...values, [name]: value}));
    }

    const sendClassroom = () => {
        axios.post(URL, {
            name: classroom.nameClassroom
        }).then( response => {
            navigate("/classroom");
            console.log(response.data);
        }).catch( error => {
            console.log(error.response.data);
        })
    }

    return (
        <Form>
            <ContainerForm>
                <HeaderForm>
                    <h1>CADASTRO DE SALA</h1>                    
                </HeaderForm>

                <hr/>

                <label htmlFor="nameClassroom">Nome da sala: </label>
                <input type="text" 
                    name="nameClassroom"
                    value={classroom.nameClassroom}
                    onChange={handleDataChange} 
                    placeholder='Digite o nome da sala'/>

                <Button onClick={sendClassroom}>Enviar</Button>
            </ContainerForm>
        </Form>
    )
}

export default FormClassroom;