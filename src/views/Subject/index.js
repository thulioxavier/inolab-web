import React, { Fragment, useEffect, useState } from "react";
import { Container } from "../../components";
import { getSubjects, postSubject, putStatusSubject } from "../../services/server";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    IconButton,
    Input,
    Button,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    useToast
} from '@chakra-ui/react';


import *as C from './styles';
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../utils";
import { ViewOffIcon, ViewIcon, EditIcon, ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";

export const Subject = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [subject, setSubject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        status: false,
        subject: null,
        request: null,
    });
    const [successful, setSuccessful] = useState({
        msg: null,
    });

    const [valuesSubjects, setValuesSubjects] = useState([]);

    useEffect(() => {
        handleGetSubjects();
    }, [loading]);

    const handleGetSubjects = async () => {
        try {
            await getSubjects().then((response) => {
                setValuesSubjects(response.data);
            }).catch((reject) => {

            });
        } catch (error) {

        }
    }



    const handleSubmit = async () => {

        setLoading(true);
        error.status = false;
        error.subject = null;
        setError({ ...error });

        if (subject) {

            if (subject.length > 2) {

                try {
                    postSubject({ name: subject }).then((response) => {
                        if (response.status) {
                            successful.msg = `Matéria Cadastrada:${response.data.name}`;
                            setSuccessful({ ...successful });
                            error.status = false;
                            error.request = null;
                            setError({ ...error });
                            setLoading(false);
                           
                            toast({
                                title: 'Matéria Criada',
                                description: "Sua Matéria foi cadastrada com sucesso!",
                                status: 'success',
                                duration: 9000,
                                isClosable: true,
                              })
                        } else {
                            error.request = "Não possível cadastrar a nova Matéria!";
                            setError({ ...error });
                            setLoading(false);
                        }

                        setTimeout(() => {
                            successful.msg = null;
                            setSuccessful({ ...successful });
                            error.status = false;
                            error.request = null;
                            setError({ ...error });
                            setLoading(false);
                        }, 3000);

                    });
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }

            } else {
                error.status = true;
                error.subject = "Nome informado não é valido!!";
                setError({ ...error });
                setLoading(false);
            }
        } else {
            error.status = true;
            if (!subject) {
                error.subject = "Campo obrigatório!!";
            } else {
                error.subject = null;
            }
            setError({ ...error });
            setLoading(false);

        }
    }

    const handlerUpdateStatusSubject = async (id, status) => {
        setLoading(true);
        try {
            await putStatusSubject({id: id, status: status});
            handleGetSubjects()
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
    }


    return (
        <Fragment>
            <Container color={"#fff"}>
                <C.Content>
                    <div>
                        <C.SubjectArea>
                            <InputGroup size='md'>
                                <InputLeftAddon children='Título' />
                                <Input
                                    type="text"
                                    placeholder="Nova Matéria"
                                    required
                                    onChange={(e) => { setSubject(e.target.value) }}
                                />
                                <InputRightElement children={<CheckIcon color={subject ? COLORS.green : COLORS.red} />} />
                            </InputGroup>


                            <Button
                                onClick={handleSubmit}
                                disabled={!subject}
                                rightIcon={<ArrowForwardIcon />}
                                colorScheme={COLORS.green}
                                variant='outline' ml="10"
                                _focus={{
                                    outline: 'none'
                                }} >
                                {
                                    loading ? (
                                        <Dots />
                                    ) : "Cadastrar"
                                }
                            </Button>
                        </C.SubjectArea>
                        <C.Error>{error.subject}</C.Error>
                        <C.Successfu>{successful.msg}</C.Successfu>
                    </div>

                    <C.TableArea style={{ border: "solid 1px #DDD" }}>

                        <Table size='sm'>
                            <TableCaption>Tabela de Matérias - InoLab </TableCaption>
                            <Thead background={COLORS.black}>
                                <Tr>
                                    <Th textAlign="center" textColor={COLORS.white}>#</Th>
                                    <Th textColor={COLORS.white}>Matéria</Th>
                                    <Th textAlign="center" textColor={COLORS.white}>Status</Th>
                                    <Th textAlign="center" textColor={COLORS.white}>Ações</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                {
                                    valuesSubjects?.map((item, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <Tr>
                                                    <Td fontWeight="bold" width="60px" bg="#DDD" textAlign="center">{item.id}</Td>
                                                    <Td>{item.name}</Td>
                                                    <Td width="60px" textAlign="center"><IconButton aria-label='show subjects' onClick={() => {handlerUpdateStatusSubject(item.id, !item.show)}} icon={item.show ? (<ViewIcon color={COLORS.white} />) : (<ViewOffIcon />)} bg={item.show ? COLORS.green : COLORS.red} /></Td>
                                                    <Td width="60px" textAlign="center"><IconButton aria-label='edit subjects' icon={<EditIcon color={COLORS.white} />} bg={COLORS.yellow} /></Td>
                                                </Tr>
                                            </Fragment>
                                        )
                                    })
                                }
                            </Tbody>

                            <Tfoot>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>Matéria</Th>
                                    <Th>Status</Th>
                                    <Th>Ações</Th>
                                </Tr>

                            </Tfoot>

                        </Table>
                    </C.TableArea>
                </C.Content>
            </Container>
        </Fragment>
    )
}