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

const fetchStays = async () => {
    const url = 'http://localhost:1337/stays'
    const res = await fetch(url)
    stays.set(await res.json())
}

export const pokemon = writable([])

const fetchPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10'
    const res = await fetch(url)
    const data = await res.json()
    const loadedPokemen = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: ``
        }
    })
    pokemon.set(loadedPokemen)
}
fetchStays()
fetchPokemon()