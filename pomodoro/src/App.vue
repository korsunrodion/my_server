<template>
  <div id="app">
    <h1 id="title" class="title is-4">Simple pomodoro timer</h1>
    <div id="main_wrapper" class="container">
      <Timer id="timer" ref="timer" 
        :time_seconds="scheme[0]*60"/>
      <b-button id="stop_btn" class="button is-primary is-inverted is-outlined" v-show="state_running==1" v-on:click="state_running = 0">Stop</b-button>
      <ModeControl id="control" v-if="state_running==0"/>
    </div>
    <button id="start_btn" class="button is-primary" :style="{visibility: !state_running ? 'visible' : 'hidden'}" v-on:click="state_running = 1">Start</button>
  </div>
</template>

 <script>
import Timer from './components/Timer.vue'
import ModeControl from './components/ModeControl.vue'
import anime from 'animejs/lib/anime.es.js';

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

  }, watch: {
    state_running: function(newValue) {
      if (newValue == 0) {
        anime({
        targets: '#timer', scale:1, easing: 'easeOutExpo'
        })
        anime({
          targets: '#timer #text', scale:1, easing: 'easeOutExpo'//, duration: 0
        })
        anime({ 
          targets: '#control', opacity:1, easing:'easeOutExpo',
        })
        anime({
          targets: '#title', rotate:0, delay: 0
        })
        anime({
          targets: '#start_btn', opacity:1, easing: 'easeOutExpo', 
        })
        anime({
          targets: '#stop_btn', opacity:0, easing: 'easeOutExpo',
        })
      } else if (newValue == 1) {
        anime({
        targets: '#timer', scale:2, easing: 'easeOutExpo'
        })
        anime({
          targets: '#timer #text', scale:1 / 2, easing: 'easeOutExpo', duration: 0
        })
        anime({ 
          targets: '#control', opacity:0, easing:'easeOutExpo',
        })
        anime({
          targets: '#title', rotate:-25, delay: 135
        })
        anime({
          targets: '#start_btn', opacity:0, easing: 'easeOutExpo',
        })
        anime({
          targets: '#stop_btn', opacity:1, easing: 'easeOutExpo',
        })
      }
    }
  }, mounted() {
    this.state_running = 1;
  }
}
</script>

<style lang="scss">
@import "src/styles/global.scss";

#app {
  width: 600px;
  height: 500px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #title {
    transform-origin: top left;
  }

  #start_btn {
    align-self: flex-end;
    float: right;
  }

  #main_wrapper {
    position: relative;
    flex-grow: 0;

    #timer {
      width: 300px;
      height: 300px;
      margin: 0 auto;
      font-size: 64pt;
    }

    #stop_btn {
      width: 70px;
      position: absolute;
      bottom: 20px;
      margin: 0 auto; left: 0; right: 0;
    }

    #control {
      position: absolute;
      right: -10px;
      top: 10px;
      border: 1px solid black;
    }
  }
}
</style>
