<script>
    import { createEventDispatcher } from 'svelte';
    
    let email = "";
    let password = "";


    const dispatch = createEventDispatcher();

    function handleSubmit() {
        if (email === "test" && password === "test") {
            dispatch('login', { isLoggedIn: true });
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="email">Email address</label>
    <input
        type="text"
        id="email"
        name="email"
        bind:value={email}
        required
        placeholder="Your email address"
    /><br />

    <label for="password">Password</label>
    <input
        type="text"
        id="password"
        name="password"
        bind:value={password}
        required
        placeholder="Your password"
    /><br />

    <button type="submit">Login</button>
</form>

<style>
    label {
        display: block;
        margin-bottom: 0.5rem;
    }
    input {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border-radius: 0.25rem;
        border: 1px solid #ccc;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
    }
</style>
