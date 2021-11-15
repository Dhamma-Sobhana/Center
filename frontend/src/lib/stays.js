import { writable, derived } from "svelte/store";
import { get } from "./api";

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
    stays.set(await get('stays'))
}