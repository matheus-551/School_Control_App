import React, { useState, useEffect } from 'react';

import {
    Container,
    GroupItems,
    Button,
    EditButton,
} from './styles';

import { Table } from '../../components/Table';
import { Edit } from '@styled-icons/boxicons-solid/Edit';

import { Link } from 'react-router-dom';
import axios from 'axios';

interface TypeTeacher {
    teachers ?: [{
        id: number,
        name: string,
        classroom: {} | null
    }]
}

const Teacher: React.FC = () => {
    const [teacher, setTeacher] = useState<TypeTeacher>({} as TypeTeacher);
    const URL = 'http://localhost:8080/api/teacher';

    useEffect(() => {
        axios.get(URL)
        .then( response => {
            setTeacher(response.data);
        }).catch( error => {
            console.log(error.response.data);
        })
    },[])
    
    return (
        <Container>
            <GroupItems>
                <h1>PROFESSORES</h1>
                <Button><Link to="/register-teacher">NOVO PROFESSOR</Link></Button>
            </GroupItems>
            <Table>
                <thead>
                    <tr>
                        <th>Nome do professor</th>
                        <th>Sala de aula</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(teacher).map(([index, value]) => {
                            return (
                               <tr key={index}>
                                    <td>{value.name}</td>
                                    {
                                        value.classroom == null
                                        ?
                                        <td>Nenhuma sala resgistrada</td>
                                        :
                                        <td>{value.classroom.name}</td>
                                    }
                                    <td><EditButton><Link to={`/register-teacher/${value.id}`}>EDITAR <Edit width={25}/></Link></EditButton></td>
                               </tr> 
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default Teacher;