import React, { Fragment, useState } from "react";
import {
    Text,
    toast,
    useToast,
    FormControl,
    FormLabel,
    Textarea,
    Divider,
    Kbd,
    Radio,
    Input,
    HStack,
    Select,
    VStack,
    Stack,
    Button
} from '@chakra-ui/react';
import { Container } from "../../components";
import *as C from './styles';
import { COLORS, Editor } from "../../utils";
import { postQuestion } from "../../services/server";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";

export const Question = () => {

    const {id_content} = useParams();

    const [altOne, setAltOne] = useState({
        body: null,
        correct: false
    });
    const [altTow, setAltTwo] = useState({
        body: null,
        correct: false
    });
    const [altThree, setAltThree] = useState({
        body: null,
        correct: false
    });
    const [altFour, setAltFour] = useState({
        body: null,
        correct: false
    });

    const [time, setTime] = useState();
    const [body, setBody] = useState();
    const [difficulty, setDifficulty] = useState();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        if(time && body && difficulty){
            if(altFour.body && altOne.body && altThree.body && altTow.body){
                if(altFour.correct || altOne.correct || altThree.correct || altTow.correct){

                    let question_array = [altOne, altTow, altThree, altFour];

                    await postQuestion({time: Number(time), body, difficulty: Number(difficulty), question_array, id_content: Number(id_content)}).then((response) => {
                        alert('DEU CERTO');
                    setLoading(false);

                    }).catch((reject) => {
                        alert('DEU Errado');
                    setLoading(false);

                    });


                }else{
                    setLoading(false);
                    //error
                }
            }else{
                setLoading(false);
                //error
            }

        }else{
            setLoading(false);
            //error
        }
    } 

    return (
        <Fragment>
            <Container>
                <C.Content>
                    <Text fontSize="2xl" mt="15px" mb="15px">Cadastrar nova questão:</Text>

                    <FormControl isRequired>
                        <FormLabel htmlFor="questao">Questão</FormLabel>

                        <ReactQuill theme="snow" value={body} modules={Editor} onChange={setBody} />

                        <span style={{ marginBottom: "10px", fontWeight: 'bold', fontSize: '14px', color: '#484848' }}>
                            Não é recomentado o uso do atalho:  <Kbd>ctrl</Kbd> + <Kbd>v</Kbd> de conteúdos de sites externos.
                        </span>

                        <HStack>
                            <Stack>
                                <FormLabel htmlFor="tempo" mt="15px">Tempo:</FormLabel>
                                <Input
                                    type="number"
                                    maxW={150}
                                    
                                    onChange={(e) => {
                                        setTime(e.target.value)
                                    }}
                                />
                                <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#484848' }}>
                                    Tempo em <Kbd>Segundos</Kbd>.
                                </span>

                            </Stack>
                            <Stack>
                                <FormLabel htmlFor="tempo" mt="15px">Dificuldade:</FormLabel>
                                <Select defaultValue="" onChange={(e) => {
                                    setDifficulty(e.target.value)
                                }} >
                                    <option value="" disabled > Escolha um nível</option>
                                    <option value={0} >Fácil</option>
                                    <option value={1} >Moderado</option>
                                    <option value={2} >Desafiante</option>
                                    <option value={3} >Difícil</option>
                                    <option value={4} >Muito Difícil</option>
                                    <option value={4} >Extremo</option>
                                </Select>
                                <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#484848' }}>
                                    Informe a <Kbd>Dificuldade</Kbd>.
                                </span>
                            </Stack>
                        </HStack>
                    </FormControl>

                    <Text fontSize="2xl" mt="15px" mb="15px">Alternativas</Text>
                    <Divider orientation='horizontal' height="1px" bg={COLORS.black} mb="15px" />

                    <FormControl isRequired>
                        <FormLabel style={{ display: 'flex', alignItems: 'center' }} htmlFor="alternativa_1">
                            <Radio
                                colorScheme={`green`}
                                isChecked={altOne.correct}
                                onClick={(e) => {
                                    if (altOne.correct == true) {
                                        altOne.correct = false;
                                        setAltOne({ ...altOne });
                                    } else {
                                        altOne.correct = true;
                                        altFour.correct = false;
                                        altThree.correct = false;
                                        altTow.correct = false;

                                        setAltFour({ ...altFour });
                                        setAltThree({ ...altThree });
                                        setAltTwo({ ...altTow });
                                        setAltOne({ ...altOne });
                                    }
                                }}
                            />
                            <span style={{ marginLeft: '10px' }}>Alternativa (<Kbd>I</Kbd>) </span>
                        </FormLabel>
                        <Textarea
                            borderColor={altOne.correct ? COLORS.green : COLORS.red}
                            placeholder="Descreva aqui a sua alternativa!"
                            onChange={(e) => {
                                altOne.body = e.target.value;
                                setAltOne({ ...altOne });
                            }}
                        />

                        <FormLabel style={{ display: 'flex', alignItems: 'center' }} htmlFor="alternativa_2" mt="15px">
                            <Radio colorScheme={`green`}
                                isChecked={altTow.correct}
                                onClick={(e) => {
                                    if (altTow.correct == true) {
                                        altTow.correct = false;
                                        setAltTwo({ ...altTow });
                                    } else {
                                        altOne.correct = false;
                                        altFour.correct = false;
                                        altThree.correct = false;
                                        altTow.correct = true;

                                        setAltFour({ ...altFour });
                                        setAltThree({ ...altThree });
                                        setAltTwo({ ...altTow });
                                        setAltOne({ ...altOne });
                                    }
                                }}
                            />
                            <span style={{ marginLeft: '10px' }}>Alternativa (<Kbd>II</Kbd>) </span>
                        </FormLabel>
                        <Textarea
                            borderColor={altTow.correct ? COLORS.green : COLORS.red}
                            placeholder="Descreva aqui a sua alternativa!"
                            onChange={(e) => {
                                altTow.body = e.target.value;
                                setAltTwo({ ...altTow });
                            }}
                        />

                        <FormLabel style={{ display: 'flex', alignItems: 'center' }} htmlFor="alternativa_3" mt="15px">
                            <Radio checked={false} colorScheme={`green`}
                                isChecked={altThree.correct}
                                onClick={(e) => {
                                    if (altThree.correct == true) {
                                        altThree.correct = false;
                                        setAltThree({ ...altThree });
                                    } else {
                                        altOne.correct = false;
                                        altFour.correct = false;
                                        altThree.correct = true;
                                        altTow.correct = false;

                                        setAltFour({ ...altFour });
                                        setAltThree({ ...altThree });
                                        setAltTwo({ ...altTow });
                                        setAltOne({ ...altOne });
                                    }
                                }}
                            />
                            <span style={{ marginLeft: '10px' }}>Alternativa (<Kbd>III</Kbd>) </span>
                        </FormLabel>
                        <Textarea
                            borderColor={altThree.correct ? COLORS.green : COLORS.red}
                            placeholder="Descreva aqui a sua alternativa!"
                            onChange={(e) => {
                                altThree.body = e.target.value;
                                setAltThree({ ...altThree });
                            }}
                        />

                        <FormLabel style={{ display: 'flex', alignItems: 'center' }} htmlFor="alternativa_4" mt="15px">
                            <Radio colorScheme={`green`}
                                isChecked={altFour.correct}
                                onClick={(e) => {
                                    if (altFour.correct == true) {
                                        altFour.correct = false;
                                        setAltFour({ ...altFour });
                                    } else {
                                        altOne.correct = false;
                                        altFour.correct = true;
                                        altThree.correct = false;
                                        altTow.correct = false;

                                        setAltFour({ ...altFour });
                                        setAltThree({ ...altThree });
                                        setAltTwo({ ...altTow });
                                        setAltOne({ ...altOne });
                                    }
                                }}
                            />
                            <span style={{ marginLeft: '10px' }}>Alternativa (<Kbd>IV</Kbd>) </span>
                        </FormLabel>
                        <Textarea
                            borderColor={altFour.correct ? COLORS.green : COLORS.red}
                            placeholder="Descreva aqui a sua alternativa!"
                            onChange={(e) => {
                                altFour.body = e.target.value;
                                setAltFour({ ...altFour });
                            }}
                        />
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