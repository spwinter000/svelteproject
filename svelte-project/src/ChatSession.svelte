<script>
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { getFirestore, collection } from "firebase/firestore";
  import { startWith } from "rxjs/operators";

  export let user;
  export let logout;

  let message = "";

  // const db = getFirestore();
  const query = collection(db, "chats");
  const chats = collectionData(query, { idField: "uid" }).pipe(startWith([]));

  function createNewMessage() {
    db.collection("chats").add({
      uid: user.uid,
      message: message,
      avatar: user.photoURL,
      sent: +new Date(),
    });
    message = "";
  }
</script>

<main>
  <h1>chat component</h1>
  <div class="header">
    <div class="logo">Chat Session</div>
    <button on:click={logout}>Logout</button>
  </div>
  <div class="messages">
    {#each $chats as chat}
      {#if user.uid == chat.uid}
        <div class="message my-message">
          <div class="text">
            {chat.message}
          </div>
        </div>
      {:else}
        <div class="message their-message">
          <div class="avatar">
            <img src={chat.avatar} alt="their-avatar" />
          </div>
          <div class="text">
            {chat.message}
          </div>
        </div>
      {/if}
    {/each}
  </div>
  <div class="form">
    <input type="text" bind:value={message} />
    <button on:click={createNewMessage}>
      <i class="fa fa-paper-plane">Send</i>
    </button>
  </div>
</main>

<style>
</style>
