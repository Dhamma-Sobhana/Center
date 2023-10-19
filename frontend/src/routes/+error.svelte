<script>
	import { page } from '$app/stores';
</script>

<div class="container">
    <div class="row">
        <div class="col">
            <h1 class="display-2">An error has occurred</h1>
            <p>Details:</p>
            
            <pre>{$page.status} : {$page.error.message}</pre>
        </div>
    </div>
</div>

