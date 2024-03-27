<script>
    let fullName = '';
    let email = '';
    let password = '';
    let confirmPassword = '';

    function handleSubmit() {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log('Form submitted!');
    }
</script>


<form on:submit|preventDefault={handleSubmit}>
    
    <label for="fullName">Full name</label>
    <input type="text" id="fullName" name="fullName" bind:value={fullName} required placeholder="Your full name"><br>

    <label for="email">Email address</label>
    <input type="text" id="email" name="email" bind:value={email} required placeholder="Your email address"><br>

    <label for="password">Password</label>
    <input type="text" id="password" name="password" bind:value={password} required placeholder="Your password"><br>

    <label for="confirmPassword">Please enter your password again</label>
    <input type="text" id="confirmPassword" name="confirmPassword" bind:value={confirmPassword} required placeholder="Your password again to confirm"><br>
    
    <button type="submit">Sign Up</button>
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