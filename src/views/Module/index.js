import React, { Fragment, useEffect, useState } from "react";
import { Container } from "../../components";
import { getContents, getModules, getSubjects, postModule } from "../../services/server";
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
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    InputRightElement,
    Select,
    Text,
    useToast
} from '@chakra-ui/react';


import *as C from './styles';
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../utils";
import { EditIcon, AddIcon, CheckIcon, LinkIcon } from "@chakra-ui/icons";

export const Module = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [module, setModule] = useState(null);
    const [moduleSelect, setModuleSelect] = useState(null);
    const [subjectSelect, setSubjectSelect] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        status: false,
        module: null,
        request: null,
    });
    const [successful, setSuccessful] = useState({
        msg: null,
    });

    const [valuesModules, setValuesModules] = useState([]);
    const [valuesBubjects, setValuesBubjects] = useState([]);
    const [valuesContents, setValuesContents] = useState([]);

    useEffect(() => {
        handleGetModules();
    }, [loading]);

    useEffect(() => {
        handleGetSubjects();
    }, []);

    useEffect(() =>{
        handleGetContents();
    },[]);

    const handleGetSubjects = async () => {
        try {
            await getModules().then((response) => {
                setValuesModules(response.data);
            }).catch((reject) => {
                toast({
                    title: 'Erro!',
                    description: "Não conseguimos encontrar nenhuma Matéria no Momento!",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
            });
        } catch (error) {
            toast({
                title: 'Erro!',
                description: "Não conseguimos encontrar nenhuma Matéria no Momento!",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
    };


    const handleGetModules = async () => {
        try {
            await getSubjects().then((response) => {
                setValuesBubjects(response.data);
            }).catch((reject) => {
                toast({
                    title: 'Erro!',
                    description: "Não conseguimos encontrar nenhuma Matéria no Momento!",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
            });
        } catch (error) {
            toast({
                title: 'Erro!',
                description: "Não conseguimos encontrar nenhuma Matéria no Momento!",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
    }


    const handleGetContents = async () => {
        try {
            await getContents().then((response) => {
                setValuesContents(response.data);
            }).catch((reject) => {
                toast({
                    title: 'Erro!',
                    description: "Não conseguimos encontrar nenhuma Matéria no Momento!",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
            });
        } catch (error) {
            toast({
                title: 'Erro!',
                description: "Não conseguimos encontrar nenhuma Matéria no Momento!",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
    }



    const handleSubmit = async () => {

        setLoading(true);
        error.status = false;
        error.module = null;
        setError({ ...error });

        if (module && subjectSelect) {

            if (module.length > 2) {

                try {
                    postModule({ name: module, id_subject: subjectSelect, id_admin: null }).then(async (response) => {
                        if (response.status) {
                            await handleGetModules();
                            setLoading(false)
                            toast({
                                title: 'Novo Módulo Cadastrado!',
                                description: "Um novo módulo foi cadastrado com sucesso!",
                                status: 'success',
                                duration: 9000,
                                isClosable: true,
                            });

                            navigate(`/dashboard/content/${response.data.id}`, undefined, response.data);

                            // navigate("/auth/sign-in");
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
                    setLoading(false);
                }

            } else {
                error.status = true;
                error.module = "Nome informado não é valido!!";
                setError({ ...error });
                setLoading(false);
            }
        } else {
            error.status = true;
            if (!module) {
                error.module = "Campo obrigatório!!";
            } else {
                error.module = null;
            }
            setError({ ...error });
            setLoading(false);

        }
    }


    return (
        <Fragment>
            <Container color={"#fff"}>
                <C.Content>
                    <div>
                        <Text fontSize='2xl' >Cadastrar novo módulos:</Text>

                        <C.SubjectArea>

                            <InputGroup size='md'>
                                <InputLeftAddon children='Título' />
                                <Input
                                    type="text"
                                    placeholder="Novo módulo"
                                    required
                                    onChange={(e) => { setModule(e.target.value) }} />
                                <InputRightElement children={<CheckIcon color={module ? COLORS.green : COLORS.red} />} />
                            </InputGroup>

                            <InputGroup size='md' ml="10">
                                <InputLeftAddon children='Matérias' />
                                <Select  defaultValue="" onChange={(e) => {
                                    setSubjectSelect(e.target.value)
                                }} >
                                    <option value="" disabled > Escolha uma matéria</option>
                                    {
                                        valuesBubjects.map((item, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    <option value={item.id}>{`${item.name}`}</option>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </Select>
                                <InputRightAddon children={subjectSelect} />
                            </InputGroup>
                            <IconButton
                                onClick={handleSubmit}
                                disabled={!module || !subjectSelect}
                                aria-label='show modules'
                                icon={
                                    loading ? (
                                        <Dots />
                                    ) : (<AddIcon />)
                                } bg={COLORS.green}
                                ml="10"
                            />

                        </C.SubjectArea>

                        <C.Error>{error.module}</C.Error>
                        <C.Successfu>{successful.msg}</C.Successfu>
                    </div>
                    <br />
                    <div>
                        <Text fontSize='2xl' >Cadastrar novo conteúdo:</Text>

                        <C.SubjectArea>
                            <InputGroup size='md'>
                                <InputLeftAddon children='Módulo' />
                                <Select defaultValue="" onChange={(e) => {
                                    setModuleSelect(e.target.value)
                                }} >
                                    <option value="" disabled>
                                        Escolha um Módulo
                                    </option>
                                    {
                                        valuesModules.map((item, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    <option value={item.id}>{item.name}</option>
                                                </Fragment>
                                            );
                                        })
                                    }
                                </Select>
                                <InputRightAddon children={moduleSelect} />
                            </InputGroup>
                            <IconButton aria-label='show modules' disabled={!moduleSelect} icon={(<EditIcon />)} bg={COLORS.yellow} mr="10" ml="10" />
                            <IconButton aria-label='show modules' disabled={!moduleSelect} icon={(<LinkIcon />)} bg={COLORS.green} onClick={() => {
                                navigate(`/dashboard/content/${moduleSelect}`, undefined, {});
                            }} />
                        </C.SubjectArea>
                    </div>

                    <Text fontSize='2xl' mt="20">Conteúdos:</Text>
                    <C.TableArea style={{ border: "solid 1px #DDD" }}>

                        <Table size='sm'>
                            <TableCaption>Tabela de Conteúdos - InoLab </TableCaption>
                            <Thead background={COLORS.black}>
                                <Tr>
                                    <Th textAlign="center" textColor={COLORS.white}>#</Th>
                                    <Th textColor={COLORS.white}>Título</Th>
                                    <Th textColor={COLORS.white}>Módulo</Th>
                                    <Th textColor={COLORS.white}>Matéria</Th>
                                    <Th textAlign="center" textColor={COLORS.white}>Questões</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                {
                                    valuesContents?.map((item, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <Tr>
                                                    <Td fontWeight="bold" width="60px" bg="#DDD" textAlign="center">{item.id}</Td>
                                                    <Td>{item.title}</Td>
                                                    <Td>{item?.modules.name}</Td>
                                                    <Td>{item?.modules.subjects.name}</Td>
                                                    <Td width="60px" textAlign="center"><IconButton onClick={()=>{
                                                        navigate(`/dashboard/question/${item.id}`, undefined, {});
                                                    }} aria-label='edit modules' icon={<AddIcon color={COLORS.white} />} bg={COLORS.green} /></Td>
                                                </Tr>
                                            </Fragment>
                                        )
                                    })
                                }
                            </Tbody>

                            <Tfoot>
                                <Tr>
                                    <Th textAlign="center" textColor={COLORS.black}>#</Th>
                                    <Th textColor={COLORS.black}>Título</Th>
                                    <Th textColor={COLORS.black}>Módulo</Th>
                                    <Th textColor={COLORS.black}>Matéria</Th>
                                    <Th textAlign="center" textColor={COLORS.black}>Questões</Th>
                                </Tr>

                            </Tfoot>

                        </Table>
                    </C.TableArea>
                </C.Content>
            </Container>
        </Fragment>
    )
}