import React, { Fragment, useState } from "react";
import {
    Text,
    FormControl,
    FormLabel,
    Textarea,
    Divider,
    Kbd,
    Radio,
    Input,
    HStack,
    Select,
    Stack,
    Button,
} from '@chakra-ui/react';
import { Container } from "../../components";
import *as C from './styles';
import { COLORS, Editor } from "../../utils";
import { postQuestion } from "../../services/server";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";

export const Question = () => {

    const { id_content } = useParams();

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

    const [time, setTime] = useState('');
    const [body, setBody] = useState('');
    const [difficulty, setDifficulty] = useState();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        if (time && body && difficulty) {
            if (altFour.body && altOne.body && altThree.body && altTow.body) {
                if (altFour.correct || altOne.correct || altThree.correct || altTow.correct) {

                    let question_array = [altOne, altTow, altThree, altFour];

                    await postQuestion({ time: Number(time), body, difficulty: Number(difficulty), question_array, id_content: Number(id_content) }).then((response) => {
                        alert('DEU CERTO');
                        setLoading(false);

                    }).catch((reject) => {
                        alert('DEU Errado');
                        setLoading(false);

                    });


                } else {
                    setLoading(false);
                    //error
                }
            } else {
                setLoading(false);
                //error
            }

        } else {
            setLoading(false);
            //error
        }
    }

    return (
        <Fragment>
            <Container color={"#fff"}>
                <C.Content>
                    <Text fontSize="2xl" mt="15px" mb="15px">Cadastrar nova quest??o:</Text>

                    <FormControl isRequired>
                        <FormLabel htmlFor="questao">Quest??o</FormLabel>

                        <ReactQuill theme="snow" value={body} modules={Editor} onChange={setBody} />

                        <span style={{ marginBottom: "10px", fontWeight: 'bold', fontSize: '14px', color: '#484848' }}>
                            N??o ?? recomentado o uso do atalho:  <Kbd>ctrl</Kbd> + <Kbd>v</Kbd> de conte??dos de sites externos.
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
                                    <option value="" disabled > Escolha um n??vel</option>
                                    <option value={0} >F??cil</option>
                                    <option value={1} >Moderado</option>
                                    <option value={2} >Desafiante</option>
                                    <option value={3} >Dif??cil</option>
                                    <option value={4} >Muito Dif??cil</option>
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
                                value={altOne.correct}
                                isDisabled={!body || body === '<p><br></p>'}
                                colorScheme={`green`}
                                isChecked={altOne.correct}
                                onChange={(e) => {
                                    if (altOne.correct === true) {
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
                            isDisabled={!body || body === '<p><br></p>'}
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
                                value={altTow.correct}
                                isDisabled={!body || body === '<p><br></p>'}
                                onChange={(e) => {
                                    if (altTow.correct === true) {
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
                            isDisabled={!body || body === '<p><br></p>'}
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
                                value={altThree.correct}
                                isDisabled={!body || body === '<p><br></p>'}
                                onChange={(e) => {
                                    if (altThree.correct === true) {
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
                            isDisabled={!body || body === '<p><br></p>'}
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
                                value={altFour.correct}
                                isDisabled={!body || body === '<p><br></p>'}
                                onChange={(e) => {
                                    if (altFour.correct === true) {
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
                            isDisabled={!body || body === '<p><br></p>'}
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