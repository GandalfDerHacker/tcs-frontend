<template>
  <div class="events">
    <navbar></navbar>


      <div class="col">
        <div class="eventWrapper">
          <div class="card" v-for="event in events">
            <div class="date"><h2>{{event.date}}</h2></div>
            <div class="card-body">
              <img src="" alt="">
              <h5 class="card-title">{{event.name}}</h5>
              <p class="card-text">Free tickets: {{event.tickets}}</p>
              <a href="#" class="btn btn-secondary">Get Ticket!</a>
            </div>
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
        events:[],
      }
    },
    methods: {
      loadGames() {
        this.$http.get('http://localhost:3000/game')
          .then(response => {
            this.events = response.body;
          });
      }
    },
    beforeMount() {
      this.loadGames();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .eventWrapper{

    flex-direction: column;

    margin: 20px
  }
  .card{
    width: 200px;
    margin: 20px;
    width: auto;
    /*ckground: url("../assets/stuhl.jpg");*/

  }
  .date{
    width: auto;
    margin: 20px;
    length: 200px;
    border-bottom-style: double;
  }

  .card-text {
    font-weight: bold;
  }

  h2 {
    font-weight: bold;
    float: left;
    font-family: 'Quicksand', sans-serif;
    font-size: large;
  }


</style>
