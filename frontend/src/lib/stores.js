import { writable } from "svelte/store";

export const pages = [{
    text: 'Check in/out',
    path: '/stays'
},{
    text: 'Between course rules',
    path: '/rules'
},{
    text: 'Who is here',
    path: '/here'
},{
    text: 'Manuals',
    path: '/manuals'
},{
    text: 'Find your way around',
    path: '/navigate'
},];

export const stays = writable([])

const fetchStays = async () => {
    const url = 'http://localhost:1337/stays'
    const res = await fetch(url)
    stays.set(await res.json())
}


fetchStays()
