<template>
  <div class="events">
    <div class="eventWrapper" v-for="event in events">
      {{event.name}}
      <br>
      Free tickets: {{event.freeTickets}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'events',
  data () {
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
.eventWrapper {
  border: 2px solid grey;
}
</style>
