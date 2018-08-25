<template>
  <div class="eventDetail">
    <navbar></navbar>
    <div>
      Game ID: {{$route.params.id}}
    </div>
    <div class="eventWrapper">
      <div class="card" v-for="ticket in tickets" style="width: 18rem;">
        <img class="card-img-top" src="../assets/station.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ticket.owner}}</h5>
          <p class="card-text">Position: {{ticket.position}}</p>
          <a href="#" class="btn btn-secondary">Get Ticket!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './navbar';

  export default {
    name: 'eventDetail',
    components: {
      Navbar
    },
    data() {
      return {
        game: {},
        tickets: [],
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
    },
    methods: {
      loadGame() {
        this.$http.get('http://localhost:3000/game/' + this.selectedField.number)
          .then(response => {
            this.selectedField = response.body;
          });
      },
      loadTickets() {
        this.$http.get('http://localhost:3000/ticket')
          .then(response => {
            this.tickets = response.body;
          });
      }
    },
    beforeMount() {
      this.loadTickets();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .eventWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px
  }
</style>
