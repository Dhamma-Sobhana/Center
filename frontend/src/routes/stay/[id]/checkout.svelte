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

    import { stays, fetchStays } from "$lib/stores";

    export let id;
    $: stay = $stays.find(s => s.id == id)

    async function handleSubmit(event) {
        let form = event.srcElement
        form.classList.add('was-validated')
        if (!form.checkValidity())
            return
        
        const res = await fetch(`http://localhost:1337/stays/${id}/checkout`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}`}
        })

        if (res.ok) {
            fetchStays()
            goto('/stay')
        } else {
            const data = await res.json()
            if (data?.message?.[0]?.messages?.[0]?.message) {
                alert(data.message[0].messages[0].message)
			}
        }
    }
</script>

<svelte:head>
    Check out: {stay.person.name}
</svelte:head>

<div class="container">
    <div class="row">
        <div class="col-12 col-md-6">
            <h1 class="display-2">Check out</h1>
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