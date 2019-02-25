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
    getTodo: (todoId) => {
        return TodoAPIEntryPoint
                    .get(`/todo/${todoId}`)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    });
    },

    addTodo: (data) => {
        return TodoAPIEntryPoint
                    .post('/todo/', data)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    })
    },

    deleteTodo: (todoId) => {
        return TodoAPIEntryPoint
                    .delete(`/todo/${todoId}`)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    })
    },

    editTodo: (todoId, data) => {
        return TodoAPIEntryPoint
                    .put(`/todo/${todoId}`, data)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    })
    },

    completeTodo: (todoId) => {
        return TodoAPIEntryPoint
                    .put(`/todo/${todoId}/complete`)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    })
    },

    incompleteTodo: (todoId) => {
        return TodoAPIEntryPoint
                    .put(`/todo/${todoId}/incomplete`)
                    .then(res => res.data)
                    .catch(({response}) => {
                        throw response.data;
                    })
    }
};