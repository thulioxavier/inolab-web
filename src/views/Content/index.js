import React, { Fragment, useState } from "react";
import { Container } from "../../components";
import *as C from "./styles";
import {
    Input,
    Button,
    InputGroup,
    FormLabel,
    useToast,
    Textarea,
    Kbd,
    FormControl,
    Text
} from '@chakra-ui/react';
import createImagePlugin from '@draft-js-plugins/image';
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { COLORS, Editor } from "../../utils";
import { postContent } from "../../services/server";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Content = () => {

    const toast = useToast();
    const navigate = useNavigate();
    const { id_module } = useParams();
    const [example, setExample] = useState(() =>
        EditorState.createEmpty()
    );
    const [description, setDescription] = useState(() =>
        EditorState.createEmpty()
    );
    const [abstract, setAbstract] = useState();
    const [ref, setRef] = useState();
    const [title, setTitle] = useState();
    const [url, setUrl] = useState();
    const [loading, setLoading] = useState(false);


    const handleSubmit = async () => {
        setLoading(true);
        if (example && description && abstract && ref && title) {
            console.log(description);
            await postContent({ title, body: description, abstract, url, ref, example, id_admin: null, id_module: Number(id_module) }).then((response) => {
                if (response.status) {
                    console.log(response);
                    setLoading(false)
                    toast({
                        title: 'Novo Módulo Cadastrado!',
                        description: "Um novo módulo foi cadastrado com sucesso!",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                    navigate('/dashboard/module', undefined, {});
                } else {
                    setLoading(false);
                    toast({
                        title: 'Erro!',
                        description: "Erro interno no servidor, tente mais tarde!",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                }
            }).catch((reject) => {
                setLoading(false);
                toast({
                    title: 'Erro!',
                    description: "Erro interno no servidor, tente mais tarde!",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
            });
        } else {

            setLoading(false);
            toast({
                title: 'Erro!',
                description: "Verifique os campos obrigatorios!",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });

        }
    }


    return (
        <Fragment>
            <Container>
                <C.Content style={{ marginBottom: 100 }}>
                    <Text fontSize={'2xl'}>Cadastrar novo conteúdo:</Text>
                    <FormControl isRequired>

                        <FormLabel htmlFor="titulo">Título:</FormLabel>
                        <InputGroup size="md">
                            <Input
                                type="text"
                                placeContent="Informe um título"
                                required
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                            />
                        </InputGroup>

                        <FormLabel mt="10" htmlFor="resumo">Resumo:</FormLabel>
                        <Textarea
                            required
                            placeholder="Descreva brevimente sobre o que esse conteúdo iria abordar"
                            onChange={(e) => { setAbstract(e.target.value) }}
                        />

                        <FormLabel mt="10" htmlFor="conteudo">Conteúdo:</FormLabel>
                        <ReactQuill theme="snow" modules={Editor} value={description} onChange={setDescription} />
                        <span style={{ marginBottom: "10px", fontWeight: 'bold', fontSize: '14px', color: '#484848' }}>
                            Não é recomentado o uso do atalho:  <Kbd>ctrl</Kbd> + <Kbd>v</Kbd> de conteúdos de sites externos.
                        </span>
                        <FormLabel mt="10" htmlFor="exemplo">Exemplos:</FormLabel>

                        <ReactQuill theme="snow" value={example} modules={Editor} onChange={setExample} />

                        <span style={{ marginBottom: "10px", fontWeight: 'bold', fontSize: '14px', color: '#484848' }}>
                            Não é recomentado o uso do atalho:  <Kbd>ctrl</Kbd> + <Kbd>v</Kbd> de conteúdos de sites externos.
                        </span>

                        <FormControl>
                            <FormLabel mt="10" htmlFor="links">Links externos:</FormLabel>
                            <Textarea
                                placeholder="Ex: links de videos, blogs, livros, etc..."
                                required
                                onChange={(e) => {
                                    setUrl(e.target.value)
                                }}
                            />
                            <span style={{ marginBottom: "10px", fontWeight: 'bold', fontSize: '14px', color: '#484848' }}>
                                Separe cada <Kbd>Link</Kbd> com um <Kbd>;</Kbd> no final.
                            </span>
                        </FormControl>

                        <FormLabel mt="10" htmlFor="referencia">Referências:</FormLabel>
                        <Textarea
                            placeholder="Referências Bibliográficas"
                            required
                            onChange={(e) => {
                                setRef(e.target.value)
                            }}
                        />
                        <span style={{ marginBottom: "10px", fontWeight: 'bold', fontSize: '14px', color: '#484848' }}>
                            Separe cada <Kbd>Referência</Kbd> com um <Kbd>;</Kbd> no final.
                        </span>
                    </FormControl>
                    <Button
                        mt="20px"
                        isLoading={false}
                        loadingText='Cadastrando'
                        bg={COLORS.green}
                        onClick={handleSubmit}

                        disabled={loading}
                    >
                        Cadastrar
                    </Button>
                </C.Content>
            </Container>
        </Fragment>
    );
}