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
import axios from 'axios';

interface TypeStudent {
    students: [{
        id: number,
        name: string,
        teacher: Object | null
    }]
}

const Student: React.FC = () => {
    const [students, setStudents] = useState<TypeStudent>({} as TypeStudent);
    const URL = 'http://localhost:8080/api/student';

    useEffect(() => {
        axios.get(URL)
        .then( response => {
            setStudents(response.data);
        }).catch( error => {
            console.log(error.response.data);
        })
    }, [])

    return (
        <Container>
            <GroupItems>
                <h1>ALUNOS</h1>
                <Button Title="NOVO ALUNO" Href="/register-student"/>
            </GroupItems>
            <Table>
                <thead>
                    <tr>
                        <th>Nome do aluno</th>
                        <th>Professor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(students).map(([index, student]) => {
                        return (
                            <tr key={index}>
                                <td>{student.name}</td>
                                {
                                    student.teacher == null 
                                    ?
                                    <td>Nenhum professor registrado</td>
                                    :
                                    <td>{student.teacher.name}</td>
                                }
                                <td><EditButton><Link to={`/register-student/${student.id}`}>EDITAR <Edit width={25}/></Link></EditButton></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Student;