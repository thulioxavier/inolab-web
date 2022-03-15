import { API } from "../connections/axios";

export const postSubject = async (values) => {
    let json;

    try {
        await API.post('subject', { name: values.name }).then((response) => {
            json = response;
        }).catch((reject) => {
            json = reject;
        })
    } catch (e) {
        console.log(e);
    }

    return json.data;
};

export const getSubjects = async () => {
    let json;

    try {
        await API.get('subjects').then((response) => {
            json = response;
        }).catch((reject) => {
            json = reject;
        })
    } catch (e) {
        console.log(e);
    }

    return json.data;
}