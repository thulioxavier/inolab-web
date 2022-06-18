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

export const postModule = async ({name, id_subject, id_admin = ""}) => {
    let json;

    try {
        await API.post('module', {name, id_subject:  Number(id_subject), id_admin} ).then((response) => {
            json = response;
        }).catch((reject) => {
            json = reject;
        })
    } catch (e) {
        console.log(e);
    }

    return json.data;
};

export const postContent = async (values) => {
    let json;

    try {
        await API.post('content', values ).then((response) => {
            json = response;
        }).catch((reject) => {
            json = reject;
        })
    } catch (e) {
        console.log(e);
    }

    return json.data;
};


export const postQuestion = async (values) => {
    let json;

    try {
        await API.post('question', values ).then((response) => {
            json = response;
        }).catch((reject) => {
            json = reject;
        })
    } catch (e) {
        console.log(e);
    }

    return json.data;
};

export const putStatusSubject = async (values) => {
    let json;

    try {
        await API.put(`/subject/update/status/${values.id}`, values ).then((response) => {
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
};

export const getContents = async () => {
    let json;
    try {
        await API.get('contents').then((response) => {
            json = response;
        }).catch((reject) => {
            json = reject;
        })
    } catch (e) {
        console.log(e);
    }

    return json.data;
};

export const getModules = async () => {
    let json;

    try {
        await API.get('modules').then((response) => {
            json = response;
        }).catch((reject) => {
            json = reject;
        })
    } catch (e) {
        console.log(e);
    }

    return json.data;
}