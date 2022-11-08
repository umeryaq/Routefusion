import {
    handleGet,
    handlePost,
    handlePut,
    handleDelete
} from "../../services/todoApi";

export const handleGetTodo = async () => {
    try {
        const res = await handleGet();
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const handlePostTodo = async (info) => {
    try {
        const res = await handlePost(info);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const handlePutTodo = async (id, query) => {
    try {
        const res = await handlePut(id, query);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const handleDeleteTodo = async (id) => {
    try {
        const res = await handleDelete(id);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
