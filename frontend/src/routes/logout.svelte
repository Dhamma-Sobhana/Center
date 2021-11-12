<script>
    import { goto } from '$app/navigation'
    import user from '$lib/user'
    localStorage.removeItem('token')
    $user = undefined
    goto('/')
</script>