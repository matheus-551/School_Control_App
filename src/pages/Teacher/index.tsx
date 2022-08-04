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
import TeacherService from '../../services/TeacherService';

interface TypeTeacher {
    teachers: [{
        id: number,
        name: string,
        classroom: {} | null
    }]
}

const Teacher: React.FC = () => {
    const [teacher, setTeacher] = useState<TypeTeacher>({} as TypeTeacher);
    const teacherService = new TeacherService();

    useEffect(() => {
        teacherService.list()
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
                <Button Title="NOVO PROFESSOR" Href="/register-teacher"/>
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
                                        <td className='emptyColumn'>Nenhuma sala resgistrada</td>
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