<template>

  <div class="user">
    <div id="profile_picture_box">
      <img id="profile_picture"
           src="https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/03/snapchat-mikah-bitmoji-questions.jpg?itok=P3ht2KMi">
    </div>


    <div id="user_infos">
      <p><span class="info_line">Benutzername: </span>{{user.user_name}}</p>
      <p><span class="info_line">Sitzplatz: </span>{{user.seat}}</p>
      <p><span class="info_line">Stadion: </span>{{user.arena}}</p>
    </div><!--end user_info-->


    <div id="chartContainer">
      <img id="chartId"
           src="data:image/png;base64,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">
    </div><!--End of the chartContainer-->
  </div><!-- end of user class -->
</template>

<script>
  import Navbar from './navbar';

  export default {
    name: "user",
    components: {
      Navbar
    },
    data() {
      return {
        user:
          {
            user_name: "Christopher Germann",
            seat: 23,
            arena: 'Bosshard Arena',
            paid_abo_price: 500,
            saved_money: 0
          }
      }
    },
    methods: {},
    computed: {}
  }
</script>

<style scoped>


  #profile_picture_box {
    display: flex;
    align-items: center;
    grid-area: pictureBox;
    justify-content: center;
    background: purple;
  }

  #profile_picture {
    max-height: 100%;
  }

  #user_infos {
    background: gray;
    display: grid;
    justify-items: left;
    align-items: center;
    flex-direction: column;
    grid-area: user_info;
  }

  #chartContainer {
    grid-area: chart;
  }

  #chartId {
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 767px) {
    .user {
      width: 100vw;
      display: grid;
      padding: 0;
      margin: 0;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas: "pictureBox" "user_info" "chart";
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1223px) {
    .user {
      width: 100vw;
      display: grid;
      height: 60%;
      padding: 0;
      margin: 0;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas: "pictureBox" "user_info" "chart";
    }
  }

  @media only screen and (min-device-width: 1224px) {
    .user {
      width: 100vw;
      display: grid;
      height: 20vh;
      padding: 0;
      margin: 0;
      grid-template-columns: 10vw 15vw 30vw 30vw;
      grid-template-rows: 1fr;
      grid-template-areas: ". pictureBox user_info chart";
    }

    #profile_picture_box {
      display: flex;
      align-items: center;
      grid-area: pictureBox;
      justify-content: right;
      background: purple;
    }

  }
</style>
