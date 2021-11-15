const base = 'http://localhost:1337'

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

    let response = await fetch(`${base}/${path}`, opts)
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