<template>
  <div class="events">
    <navbar></navbar>
    <div class="eventWrapper">
      <div class="card"  v-for="event in events" style="width: 18rem;">
        <img class="card-img-top" src="../assets/station.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{event.name}}</h5>
          <p class="card-text">Free tickets: {{event.freeTickets}}</p>
          <a href="#" class="btn btn-secondary">Get Ticket!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './navbar';

  export default {
    name: 'events',
    components: {
      Navbar
    },
    data() {
      return {
        events: [
          {
            name: "YBvsFCL",
            freeTickets: 2
          },
          {
            name: "ZimiVSChrisi",
            freeTickets: 4
          },
          {
            name: "AvsB",
            freeTickets: 6
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .eventWrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px
  }
</style>
