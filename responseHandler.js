const sendSuccess =(response, data = {}, code = 200, message = 'Request successful') => {
    const resp = {
        data,
        message,
    };
    return response.status(code).json(resp);
};

const sendError = (response, errors = [], code = 422) => {
    const resp = {
        errors,
    };
    return response.status(code).json(resp);
};

module.exports = { sendSuccess, sendError};