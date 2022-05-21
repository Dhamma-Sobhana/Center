import { writable, get as gets} from "svelte/store";

export const host = writable()

// Get host value from store, set by __layout
function getBase() {
    if (gets(host) == 'localhost') {
        return 'http://api.localhost/api'
    } else if (gets(host) == 'localhost:3000') {
        return 'http://localhost:1337/api'
    } else {
        return `http://api.${gets(host)}/api`
    }
}

// https://github.com/sveltejs/realworld/blob/d2156528e6f52222494339b12d437f96ab028fe6/src/lib/api.js
async function send({method, path, data}) {
    const opts = { method, headers: {}}

    if (data) {
        opts.headers['Content-Type'] = 'application/json'
        opts.body = JSON.stringify(data)
    }

    if ('token' in localStorage) {
        opts.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    }

    let response = await fetch(`${getBase()}/${path}`, opts)
    let result;

    try {
        result = await response.json()
    } catch (err) {
        result = await response.text()
    }

    if (response.ok) {
        return result
    } else {
        return new Promise((resolve, reject) => {
            reject(result)
        })
    }
}

export function get(path) {
    return send({method: 'GET', path})
}

export function del(path) {
    return send({method: 'DELETE', path})
}

export function post(path, data) {
    return send({method: 'POST', path, data})
}

export function put(path, data) {
    return send({method: 'PUT', path, data})
}