<script>
  import FriendsCounter from "./components/FriendsCounter/FriendsCounter.svelte";
  import Greeter from "./components/Greeter/Greeter.svelte";
</script>

<main>
  <Greeter name="BOB"></Greeter>

  <FriendsCounter friendsCounter={0}></FriendsCounter>
</main>
