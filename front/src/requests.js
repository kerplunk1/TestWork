import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


async function getSettings(idInstance, apiTokenInstance) {
    const response = await axios.get(`${API_URL}/api/get-settings`,
        {
            params: {
                idInstance,
                apiTokenInstance
            }
        }
    )
    return await response.data
}


async function getStateInstance(idInstance, apiTokenInstance) {
    const response = await axios.get(`${API_URL}/api/get-state-instance`,
        {
            params: {
                idInstance,
                apiTokenInstance
            }
        }
    )
    return await response.data
}


async function sendMessage(idInstance, apiTokenInstance, chatId, message) {
    const response = await axios.post(`${API_URL}/api/send-message`,
        {
            idInstance,
            apiTokenInstance,
            chatId,
            message
        }
    )
    return response.data
}


async function sendFileByUrl(idInstance, apiTokenInstance, chatId, urlFile) {
    const response = await axios.post(`${API_URL}/api/send-file-by-url`,
        {
            idInstance,
            apiTokenInstance,
            chatId,
            urlFile
        }
    )
    return response.data
}


export {
    getSettings,
    getStateInstance,
    sendMessage,
    sendFileByUrl
}