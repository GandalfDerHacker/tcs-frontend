<template>
  <div class="profile">
    <navbar></navbar>
    <div class="eventWrapper" v-for="ticket in tickets">
      {{ticket.name}}
    </div>
  </div>
</template>

<script>
  import Navbar from './navbar';

  export default {
    name: 'profile',
    components: {
      Navbar
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
