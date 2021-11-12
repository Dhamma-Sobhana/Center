import { writable } from "svelte/store";

export const pages = [{
    text: 'Check in/out',
    path: '/stays',
    icon: 'person-check'
},{
    text: 'Between course rules',
    path: '/rules',
    icon: 'text-paragraph'
},{
    text: 'Who is here',
    path: '/here',
    icon: 'people'
},{
    text: 'Manuals',
    path: '/manuals',
    icon: 'book'
},{
    text: 'Find your way around',
    path: '/navigate',
    icon: 'pin-map'
},];

export const stays = writable([])
