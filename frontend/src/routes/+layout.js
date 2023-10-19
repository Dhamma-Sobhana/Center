import { host } from '$lib/api'
export async function load({url}) {
    host.set(url.host);
    return {}
}
