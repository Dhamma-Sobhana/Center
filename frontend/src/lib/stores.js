import { writable, derived } from "svelte/store";

export const pages = [{
    title: 'Check in/out',
    description: 'Arriving at or leaving the center.',
    path: '/stay',
    icon: 'person-check'
},{
    title: 'Between course rules',
    description: 'Rules that apply while staying at the center.',
    path: '/rules',
    icon: 'text-paragraph'
},{
    title: 'Who is here',
    description: 'List who is currently here and where they stay.',
    path: '/here',
    icon: 'people'
},{
    title: 'Manuals',
    description: 'Instructions for doing tasks at the center.',
    path: '/manuals',
    icon: 'book'
},{
    title: 'Find your way around',
    description: 'Find out where things are located',
    path: '/navigate',
    icon: 'pin-map'
},];

export const stays = writable([])

export const arriving = derived(
    stays,
    $stays => $stays.filter(stay => stay.status == 'confirmed')
)

export const leaving = derived(
    stays,
    $stays => $stays.filter(stay => stay.status == 'checked_in')
)

export const fetchStays = async () => {
    const url = 'http://localhost:1337/stays'
    const token = localStorage.getItem('token')
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}`}})
    stays.set(await res.json())
}