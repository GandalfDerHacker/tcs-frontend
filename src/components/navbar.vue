<template>
  <div class="navbar">
    <div class="logo-container">
      <img height="50" src="../assets/tcs_logo.png">
      <div> <h1>TCS Saisonticket Market</h1></div>
    </div>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href="#" v-on:click="$router.push({path: '/'});">Overview</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#" v-on:click="$router.push({path: '/events'});">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" v-on:click="$router.push({path: '/profile'});">My Profile</a>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'navbar',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar{
    background-color: rgb(36, 52, 85);
  }
  .logo-container{
    display: inline;
  }
  h1 {
    font-size: 1em;
    color: white;
  }
</style>
