<template>
  <div class="profile">
    <navbar></navbar>
    <user></user>
  </div>
</template>

<script>
  import Navbar from './navbar';
  import User from './user';

  export default {
    name: 'profile',
    components: {
      Navbar, User
    },
    data() {
      return {
        tickets: [
          {
            name: "Ticket1"
          },
          {
            name: "Ticket2"
          },
          {
            name: "Ticket3"
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .eventWrapper {
    border: 2px solid grey;
  }
</style>
