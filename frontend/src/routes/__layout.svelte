<script>
    import { each } from "svelte/internal";
    import Nav from "$lib/nav.svelte";
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap-icons/font/bootstrap-icons.css";
    typeof window !== `undefined` && import("bootstrap/js/src/collapse")
</script>

<Nav />

<slot></slot>
