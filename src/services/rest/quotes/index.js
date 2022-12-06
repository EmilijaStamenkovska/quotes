// Constants
import { API_BASE_URL } from '../../data/constants/index';

export const allTodos = async () => {

    return await fetch(
        `${API_BASE_URL}/api/v1/quotes/get-all-quotes`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(res => {
        if (!res.ok) {
            return Promise.reject(res);
        }
        if (res.headers.get('content-type').includes('application/json')) {
            return res.json();
        } else if (res.headers.get('content-type').includes('text/plain')) {
            return res.text();
        }
    })
};

export const oneTodo = async () => {

    return await fetch(
        `${API_BASE_URL}/api/v1/quotes/get-random-quote`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(res => {
        if (!res.ok) {
            return Promise.reject(res);
        };
        if (res.headers.get('content-type').includes('application/json')) {
            return res.json();
        } else if (res.headers.get('content-type').includes('text/plain')) {
            return res.text();
        };
    })
};
