<template>
  <div class="profileSite">
    <navbar></navbar>
    <div class="eventWrapper">
      <div class="card" v-for="event in events" style="width: 20rem;">
        <img class="card-img-top" src="../assets/station.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{event.name}}</h5>
          <p class="card-text">Free tickets: {{event.info}}</p>
          <a href="#" class="btn btn-secondary"
             v-on:click="switchRoute(event.link)">More!</a>
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
            name: "Buy a Card",
            info: "Here You can buy your ticket for an event",
            link: "/events"
          },
          {
            name: "Sell a Card",
            info: "Here You can sell your ticket for an event",
            link: "/profile"
          },
          {
            name: "My Ticket",
            info: "stay up to date with your tickets",
            link: "/profile"
          }
        ]
      }

    },
    methods:{
      switchRoute(path){
        this.$router.push({path: path});
      }
    }
  }
</script>

<style scoped>
  .eventWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px
  }

  .card {
    margin: 20px;
  }

</style>
