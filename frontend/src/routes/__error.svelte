<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<div class="container">
    <div class="row">
        <div class="col">
            <h1 class="display-2">An error has occurred</h1>
            <p>Stay safe</p>
            
            <pre>{title}</pre>
        </div>
    </div>
</div>

