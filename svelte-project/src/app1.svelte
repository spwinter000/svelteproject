<script>
  import { auth, googleProvider } from "./firebase";
  import { signInWithPopup } from "firebase/auth";
  import { authState } from "rxfire/auth";

  let user;

  let test = auth;

  const unsubscribe = authState(auth).subscribe(usr => (user = usr));

  function login() {
    signInWithPopup(auth, googleProvider);
  }

  function logout() {
    auth.signOut();
  }
</script>

<main>
  {#if user}
    Logged in as {user.uid}
  {:else}
    <button on:click={login}>
      <i class="fa fa-google"></i>
      Sign In with Google
    </button>
  {/if}
</main>
