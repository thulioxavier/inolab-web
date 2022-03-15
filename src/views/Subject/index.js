import React, { Fragment, useEffect, useState } from "react";
import { Container } from "../../components";
import { getSubjects, postSubject } from "../../services/server";
import { render } from "react-dom";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";

import *as C from './styles';
import { useNavigate } from "react-router-dom";

export const Subject = () => {
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
                console.log(response.data);
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

                            navigate("/auth/sign-in");
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


    return (
        <Fragment>
            <Container>
                <C.Content>
                    <div>
                        <C.SubjectArea>
                            <C.Input
                                type="text"
                                placeholder="Nova Matéria"
                                required
                                onChange={(e) => { setSubject(e.target.value) }} />
                            <C.Button onClick={handleSubmit} disabled={!subject}>{
                                loading ? (
                                    <Dots />
                                ) : "Cadastrar"
                            }</C.Button>
                        </C.SubjectArea>
                        <C.Error>{error.subject}</C.Error>
                        <C.Successfu>{successful.msg}</C.Successfu>
                    </div>

                    <C.TableArea>

                        <C.Table>
                            <tr className="table__header">
                                <th>#</th>
                                <th>Matéria</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>

                            {
                                valuesSubjects?.map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.show.toString()}</td>
                                                <td>Botton</td>
                                            </tr>
                                        </Fragment>
                                    )
                                })
                            }

                        </C.Table>
                    </C.TableArea>
                </C.Content>
            </Container>
        </Fragment>
    )
}