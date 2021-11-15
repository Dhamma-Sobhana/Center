<script context="module">
    export async function load({page}) {
        let id = page.params.id

        return {props: {
            id
        }}
    }
 </script>

<script>
    import { goto } from "$app/navigation";
    import { post } from '$lib/api'

    import { stays } from "$lib/stays";

    export let id;
    $: stay = $stays.find(s => s.id == id)

    async function handleSubmit(event) {
        let form = event.srcElement
        form.classList.add('was-validated')
        if (!form.checkValidity())
            return
        

        try {
            const response = await post(`stays/${id}/checkout`)
            goto('/stay')
        } catch (err) {
            if (err?.message?.[0]?.messages?.[0]?.message) {
                alert(err.message[0].messages[0].message)
			}
        }
    }
</script>

<svelte:head>
    <title>Check out: {stay.person.name}</title>
</svelte:head>

<div class="container">
    <div class="row">
        <div class="col-12 col-md-6">
            <h1 class="display-2 mb-3">Check out</h1>
            <h2>{stay.person.name}</h2>

            <dl class="row mt-3">
                <dt class="col-sm-3">Purpose</dt>
                <dd class="col-sm-9">{stay.purpose}</dd>

                <dt class="col-sm-3">Arrival</dt>
                <dd class="col-sm-9">{stay.from}</dd>

                <dt class="col-sm-3">Departure</dt>
                <dd class="col-sm-9">{stay.to}</dd>

                <dt class="col-sm-3">Room</dt>
                <dd class="col-sm-9">{stay.room.house.name}, room {stay.room.name}, bed {stay.bed.name}</dd>
            </dl>
        </div>
    </div>
    <div class="row">
        <form method="post" on:submit|preventDefault={handleSubmit} class="col-12 col-md-6 needs-validation d-grid gap-3 d-md-block d-md-flex justify-content-md-between" novalidate>
            <a href="/stay" class="btn btn-lg btn-light">Cancel</a>
            <button type="submit" class="btn btn-lg btn-primary">Check out</button>
        </form>
    </div>
</div>