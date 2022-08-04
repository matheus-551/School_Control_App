import React, { useState, useEffect } from 'react';

import {
    Container,
    GroupItems,
    EditButton,
} from './styles';

import Button from '../../components/Button';
import { Table } from '../../components/Table';
import { Edit } from '@styled-icons/boxicons-solid/Edit';

import { Link } from 'react-router-dom';

import ClassroomService from '../../services/ClassroomService';

interface TypeClassroom {
    Classroom?: [{
        id: number,
        name: string 
    }]
}

const Classroom: React.FC<TypeClassroom>= () => {
    const [classrooms, setClassrooms] = useState<TypeClassroom>({} as TypeClassroom);

    const classroomService = new ClassroomService();

    useEffect(() => {
        classroomService.list()
        .then( response => {
            setClassrooms(response.data);
        }).catch( error => {
            console.log(error);
        })
    }, []);

    return (
       <Container>
        <GroupItems>
            <h1>SALA DE AULA</h1>
            <Button Title="NOVA SALA" Href="/register-classroom"/>
        </GroupItems>
        <Table>
            <thead>
                <tr>
                    <th>Nome da sala</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(classrooms).map(([key, value]) =>{
                    return (
                        <tr key={key}>
                            <td>{value.name}</td>
                            <td>
                                <EditButton>
                                    <Link to={`/register-classroom/${value.id}`}>EDITAR <Edit width={25}/></Link>
                                </EditButton>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
       </Container>
    )
}

export default Classroom;