import { get_root_for_style } from "svelte/internal";
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
    let results = await get('stays?populate=bed,person,room.house')
    stays.set(results.data)
}