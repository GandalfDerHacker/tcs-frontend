<template>
  <div class="events">
    <navbar></navbar>


      <div class="col">
        <div class="eventWrapper">
          <div class="card" v-for="event in events">
            <div class="date">{{event.date}}</div>
            <div class="card-body">
              <h5 class="card-title">{{event.name}}</h5>
              <p class="card-text">Free tickets: {{event.freeTickets}}</p>
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
        events: [
          {
            date: "12.September 1990",
            name: "YBvsFCL",
            freeTickets: 2
          },
          {
            date: "11. November 1990",
            name: "ZimiVSChrisi",
            freeTickets: 4
          },
          {
            date: "12.Dezember 1990",
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

    flex-direction: column;

    margin: 20px
  }
  .card{
    width: 200px;
    margin: 20px;
    width: auto;
    background: url("../assets/stuhl.jpg");

  }
  .date{
    width: 200px;
    margin: 20px;
    length: 200px;
    font-family: 'Quicksand', sans-serif;
    font-size: large;
    font-weight: bold;
  }

  .card-text {
    font-weight: bold;
  }

  h5 {
    font-weight: bold;
  }


</style>
