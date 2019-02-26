import axios from 'axios'

const TodoAPIEntryPoint = axios.create({
    baseURL: process.env.HOST + '/api',
    timeout: 10000,
    withCredentials: true,
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default const TodoAPI = {
    getTodo: (todoId, config) => {
        return TodoAPIEntryPoint
                    .get(`/todo/${todoId}`, config)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    });
    },

    addTodo: (data, config) => {
        return TodoAPIEntryPoint
                    .post('/todo/', data, config)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    })
    },

    deleteTodo: (todoId, config) => {
        return TodoAPIEntryPoint
                    .delete(`/todo/${todoId}`, config)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    })
    },

    editTodo: (todoId, data, config) => {
        return TodoAPIEntryPoint
                    .put(`/todo/${todoId}`, data, config)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    })
    },

    completeTodo: (todoId, config) => {
        return TodoAPIEntryPoint
                    .put(`/todo/${todoId}/complete`, config)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    })
    },

    incompleteTodo: (todoId, config) => {
        return TodoAPIEntryPoint
                    .put(`/todo/${todoId}/incomplete`, config)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    })
    }
};