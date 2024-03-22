<script>
    export let friendsCounter = 0;
    function addFriend() {
        friendsCounter += 1;
    }

    function alienateFriend() {
        friendsCounter--;           
    }
</script>

<div>
    <h2>
        {friendsCounter === 0
            ? "You have none friends :'("
            : `You have ${friendsCounter} friends`}
    </h2>
    <button on:click={addFriend}>Add one more friend</button>
    <button on:click={alienateFriend}>Alienate a friend</button>
</div>
