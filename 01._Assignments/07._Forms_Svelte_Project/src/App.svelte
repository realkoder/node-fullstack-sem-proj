<script>
  import LoginForm from "./components/LoginForm/LoginForm.svelte";
  import SignupForm from "./components/SignupForm/SignupForm.svelte";

  let showingSignup = false;
  let isLoggedIn = false;

  function handleLogin(event) {
    isLoggedIn = event.detail.isLoggedIn;
  }
</script>

<main>
  <h1>HELLO THERE!</h1>

  {#if isLoggedIn}
    <h1>YOYOYOY YOURE LOGGED IN</h1>
  {:else if showingSignup}
    <div class="form-container">
      <SignupForm></SignupForm>
    </div>
  {:else}
    <div class="form-container">
      <h2>LOGIN</h2>
      <LoginForm on:login={handleLogin}></LoginForm>
    </div>
  {/if}

  {#if !isLoggedIn}
    <button on:click={() => (showingSignup = !showingSignup)}
      >{!showingSignup ? "Sign yourself up" : "LOGIN"}</button
    >
    {:else}
    <button on:click={() => (isLoggedIn = !isLoggedIn)}
      >LOGOUT</button
    >
  {/if}
</main>

<style>
  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  .form-container {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
</style>
