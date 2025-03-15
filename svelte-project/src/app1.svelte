<script>
  import { auth, googleProvider } from "./firebase";
  import { signInWithPopup, signOut } from "firebase/auth";
  import { authState } from "rxfire/auth";
  import  ChatSession from "./ChatSession.svelte";

  let user;

  const unsubscribe = authState(auth).subscribe(usr => (user = usr));

  function login() {
    signInWithPopup(auth, googleProvider);
  }

  function logout() {
    signOut(auth);
  }
</script>

<main>
  {#if user}
    <ChatSession user={user} logout={logout}>
  {:else}
    <div class="login-form">
      <button on:click={login}>
        <i class="fa-brands fa-google"></i>
        Sign in with Google
      </button>
    </div>
  {/if}
</main>

<style>
  main {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-width: 400px;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0px 5px 1-px rgba(0, 0, 0, 0.05);
  }
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .login-form button {
    padding: 10px;
    background: #fff;
    color: #111;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 20px;
    cursor: pointer;
  }
  .fa-google {
    background: conic-gradient(
        from -45deg,
        #ea4335 110deg,
        #4285f4 90deg 180deg,
        #34a853 180deg 270deg,
        #fbbc05 270deg
      )
      73% 55%/150% 150% no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    padding-right: 10px;
  }
</style>
