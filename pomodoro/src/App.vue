<template>
  <section id="app" class="section">
    <h1 id="title" class="title is-4">Simple pomodoro timer</h1>
    <div id="main_wrapper">
      <Timer id="timer" ref="timer" 
        :time_seconds="scheme[0]*60"/>
      <b-button id="stop_btn" type="is-primary" v-if="state_running==1" v-on:click="stop">Stop</b-button>
      <ModeControl id="control" v-if="state_running==0"/>
    </div>
    <b-button id="start_btn" type="is-primary" v-if="state_running==0" v-on:click="start">Start</b-button>
  </section>
</template>

 <script>
import Timer from './components/Timer.vue'
import ModeControl from './components/ModeControl.vue'

export default {
  name: 'App',
  components: {
    Timer,
    ModeControl
  }, data() {
      return {
        // check cookie
        state_running: 0,
        state_mode: 'work', // ['work', 'sbreak', 'lbreak']
        scheme: [25, 5, 15]
      }
  }, methods: {
    start() {
      this.$anime({
        targets: '#timer', scale:2.5, easing: 'easeOutQuart'
      })
      this.$anime({
        targets: '#timer #text', scale:1 / 2.5, easing: 'easeOutQuart', duration: 0
      })
      this.$anime({ 
        targets: '#control', opacity:0, easing:'easeOutQuart',
      })
      this.$anime({
        targets: '#title', rotate:-25, delay: 200
      })
      this.$anime({
        targets: '#start_btn', opacity:0, easing: 'easeOutQuart',
      })
      this.$anime({
        targets: '#stop_btn', opacity:1, easing: 'easeOutQuart',
      })

      this.state_running = 1
    },

    stop() {
      this.$anime({
        targets: '#timer', scale:1, easing: 'easeOutQuart'
      })
      this.$anime({
        targets: '#timer #text', scale:1, easing: 'easeOutQuart'//, duration: 0
      })
      this.$anime({ 
        targets: '#control', opacity:1, easing:'easeOutQuart',
      })
      this.$anime({
        targets: '#title', rotate:-25, delay: 200
      })
      this.$anime({
        targets: '#start_btn', opacity:1, easing: 'easeOutQuart',
      })
      this.$anime({
        targets: '#stop_btn', opacity:0, easing: 'easeOutQuart',
      })

      this.state_running = 0
    }
  }
}
</script>

<style lang="scss">
@import "src/styles/global.scss";

#app {
  width: 80%;
  margin: 60px auto;
  // background-color: lightgray;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  #title {
    transform-origin: top left;
  }

  #start_btn {
    // padding: 0 20px;
    align-self: flex-end;
  }

  #main_wrapper {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    margin: 0 auto;
    position: relative;
    // border: 1px solid black;

    #stop_btn {
      width: 70px;
      position: absolute;
      bottom: 20px;
      margin: 0 auto; left: 0; right: 0;
      // display: none;
      // opacity: 0;
    }

    #control {
      position: absolute;
      left: 100%;
      top: 50px;
    }
  }
}
</style>
