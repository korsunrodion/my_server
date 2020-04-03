<template>
  <div id="app" class="hero-body container">

    <div id="title" v-bind:class="{running: state_running, nRunning: !state_running}">
      <h1 class="title is-4">Simple pomodoro timer</h1>
    </div>

    <div id="main_wrapper">
      <!-- <div id="timer_wrapper" -->
      <Timer id="timer" ref="timer" 
        v-bind:class="{running: state_running, nRunning: !state_running}"
        :time_seconds="counter" :is_running="state_running"/>
      <button id="stop_btn" class="button is-primary is-inverted is-outlined" v-show="state_running==1" v-on:click="state_running = 0">Stop</button>
      <ModeControl id="control" v-if="state_running==0"/>
    </div>

    <button id="start_btn" class="button is-primary" :style="{visibility: !state_running ? 'visible' : 'hidden'}" v-on:click="state_running = 1">Start</button>
  </div>
</template>

 <script>
import Timer from './components/Timer.vue'
import ModeControl from './components/ModeControl.vue'
// import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'App',
  components: {
    Timer,
    ModeControl
  }, data() { 
      return {
        settings: [0,0,0],
        counter: 0,

        // check cookie
        state_running: 0,
        state_mode: 'work', // ['work', 'sbreak', 'lbreak']
      }
  }, mounted() {
    if (localStorage.settings) {
      this.settings = localStorage.settings.split(' ')
    } else {
      this.settings = [25*60, 5*60, 15*60]
    }
    
    this.counter = Number(this.settings[0])
  }, watch: {
    settings(newSettings) {
      localStorage.settings = ' '.join(newSettings)
    },
    // state_running(value) {
      // if (value == 1) {
      //   this.counter = this.settings[0]
      // } else if (value == 0) {
      //   this.counter = null
      // }
    // },
    counter: {
      handler(value) {
        if (value > 0) {  
          setTimeout(() => {
              this.counter--
          }, 1000);
        }
      }
    },
  }, methods: {

  }
}
</script>

<style lang="scss">
@use "sass:math";

@import "src/styles/global.scss";

section.hero {
  position: relative;
  max-width: 700px; 
  width: 100vw; 
	margin: 0 auto;
  float: none;
}

#app {
  max-width: 700px !important; 
  width: auto;
  margin: 0;

  align-self: stretch;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  #title {
    align-self: flex-start;
    transform-origin: top left;
    transition: all 0.5s;

    &.running {
      transform: rotate(-25deg);
    }
  }

  #start_btn {
    align-self: flex-end;
    margin-top: 40px;
    margin-right: 20px;
  }

  #main_wrapper {
    align-self: center;
    position: relative;
    flex-grow: 0;
    @media screen and (min-width: $timer_max_size/6*10) {
      padding: $timer_max_size/3.5 0 0 0;
      // padding: $timer_max_size/2-$timer_max_size*math.sqrt(3)/2 0 0 0;
      // padding: $timer_max_size*math.sqrt(3)/2/2-60px 0 0 0;
    }
    @media screen and (max-width: $timer_max_size/6*10) {
      // padding: $timer_size/2-$timer_size 0 0 0;
      padding: $timer_size*math.sqrt(3)/2/3 0 0 0;
    }

    #timer {
      width: $timer_size;
      height: $timer_size;
      max-width: $timer_max_size;
      max-height: $timer_max_size;
      margin: 0 auto;
      // font-size: 64pt;
      font-size: 14vw;
      @media screen and (min-width: 700px) {
        font-size: 64pt;
      }      
    }

    #stop_btn {
      width: 70px;
      position: absolute;
      bottom: 20px;
      margin: 0 auto; left: 0; right: 0;
    }

    #control {
      position: absolute;
      // right: 0;
      // top: 0;
      
      @media screen and (min-width: $timer_max_size/6*10) {
        top: $timer_max_size/3.5 + 15px;
        right: 0;
      }
      @media screen and (max-width: $timer_max_size/6*10) {
        top: $timer_size*math.sqrt(3)/2/3 + 2.5vw;
        right: 0;
        // padding: $timer_size*math.sqrt(3)/2/3 0 0 0;
      }
    }
  }
}
</style>
