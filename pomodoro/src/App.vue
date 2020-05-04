<template>
  <div id="app" class="hero-body container">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div id="header" class="navbar-brand notification is-info">
        <a id="home_btn" class="navbar-item" href="http://korsunrodion.com">
          <h1 class="subtitle is-5">Home</h1>
        </a>
      </div>
    </nav>
    

    <div id="title" v-bind:class="{running: state_running, nRunning: !state_running}">
      <h1>Simple pomodoro timer</h1> 
    </div>

    <div id="main_wrapper">
      <Timer id="timer" ref="timer"  
        v-bind:class="{running: state_running, nRunning: !state_running, flipped: settings_visible==true}"
        v-bind:time_seconds="time_seconds"
        :is_running="state_running"
        :regime="state_mode"/>
      <Settings id="settings" v-bind:class="{flipped: settings_visible==true}"/>
      <button id="stop_btn" class="button is-primary is-inverted is-outlined" v-show="state_running==1" v-on:click="state_running = 0">Stop</button>
      <ModeControl id="control" v-show="state_running==0"
      v-on:state_changed="state_change"/>
    </div>

    <!-- <div id="edit_wrap" class="flipper_container" v-bind:class="{flipped: settings_visible}">
      <button id="edit_btn" class="button" :style="{visibility: !state_running ? 'visible' : 'hidden'}" v-on:click="edit_clicked">edit</button>
      <button id="back_btn" class="button" :style="{visibility: !state_running ? 'visible' : 'hidden'}" v-on:click="back_clicked">back</button>
    </div> -->
    <button id="start_btn" class="button is-primary" :style="{visibility: !state_running ? 'visible' : 'hidden'}" v-on:click="state_running = 1">Start</button>
 
    <!-- <ModalSettings v-show="settings_visible" @close="settings_visible = false"/> -->
 </div>
</template>

 <script>
import Timer from './components/Timer.vue'
import ModeControl from './components/ModeControl.vue'
// import ModalSettings from './components/ModalSettings.vue'
import Settings from './components/Settings.vue'

export default {
  name: 'App',
  components: {
    Timer,
    ModeControl,
    // ModalSettings,
    Settings
  }, data() { 
      return {
        // settings: [0,0,0],
        work_time: isNaN(localStorage.work_time) ? 25*60 : localStorage.work_time,
        srest_time: isNaN(localStorage.srest_time) ? 5*60 : localStorage.srest_time,
        lrest_time: isNaN(localStorage.lrest_time) ? 15*60 : localStorage.lrest_time,

        prev_time_seconds: null,
        time_seconds: isNaN(localStorage.work_time) ? 25*60 : localStorage.work_time,

        settings_visible: false,

        // test_prop: 0,

        state_running: 0,
        state_mode: 'work', // ['work', 'sbreak', 'lbreak', 'choice']

      }
  }, mounted() {
   
  }, watch: {
    work_time (newTime) {
      localStorage.work_time = String(newTime)
    },  
    srest_time (newTime) {
      localStorage.srest_time = String(newTime)
    },
    lrest_time (newTime) {
      localStorage.lrest_time = String(newTime)
    },
    state_mode(newValue, oldValue) {
      this.prev_time_seconds = this.get_time(oldValue)
      this.time_seconds = this.get_time(newValue)
      console.log('mode: ' + String(oldValue))
    }
  }, methods: {
    state_change(newState) {
      this.state_mode = newState
      console.log(newState)
    },
    edit_clicked() {
      this.settings_visible = true;
      // this.test_prop = !this.test_prop
    },
    back_clicked() {
      this.settings_visible = false;
    },
    get_time(mode) {
      if (mode == 'work') {
        return this.work_time
      } else if (mode == 'sbreak') {
        return this.srest_time
      } else if (mode == 'lbreak') {
        return this.lrest_time
      } else if (mode == 'choice'){
        return this.prev_time_seconds
      }    
    }
  }
}
</script>

<style lang="scss">
@use "sass:math";

@import "src/styles/global.scss";

body, html {
  overflow-x: auto;
  overflow-y: hidden;

  font-family: 'Montserrat', sans-serif;
}

section.hero {
  position: relative;
  max-width: 700px; 
  width: 100vw; 
	margin: 0 auto;
}

#app {
  max-width: 700px; 
  width: auto;
  margin: 0;

  align-self: stretch;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  // overflow-y: hidden;

  transition: 0.5s;

  #header {
    // padding: 0;
    display: block;
    width: 100%;
    margin-left: 0 !important;

    #home_btn {
      text-decoration: none;
    }

    #info {
      position: absolute;
      right: 0px;
      margin: 5px 0;
    }
  }
  // backface-visibility: hidden;

  #title {
    align-self: flex-start;
    transform-origin: top left;
    transition: all 0.5s;

    h1 {
      font-weight: 300;
      font-size: 1.5rem;
    }

    &.running {
      transform: rotate(-25deg);
    }
  }

  #start_btn {
    align-self: center;
    margin-top: 40px;
    margin-right: -200px;
    box-shadow: 0.5em 0.5em 1em -0.125em rgba(10,10,10,0.2), 0 0 0 1px rgba(10,10,10,.02);
  }

  #edit_wrap {
    align-self: flex-end;
    margin-right: 50px;
    margin-top: -50px
  }

  #main_wrapper {
    align-self: center;
    position: relative;
    flex-grow: 0;
    @media screen and (min-width: $timer_max_size/6*10) {
      padding: $timer_max_size/3.5 0 0 0;
    }
    @media screen and (max-width: $timer_max_size/6*10) {
      padding: $timer_size*math.sqrt(3)/2/3 0 0 0;
    }


    #settings {
      backface-visibility: hidden;
      position: absolute;
      left: 0;

      @media screen and (min-width: $timer_max_size/6*10) {
        top: $timer_max_size/3.5;
      }
      @media screen and (max-width: $timer_max_size/6*10) {
        top: $timer_size*math.sqrt(3)/2/3;
      }

      width: $timer_size;
      height: $timer_size;
      max-width: $timer_max_size;
      max-height: $timer_max_size;
      // margin: 0 auto;
      transform: rotateY(180deg);

      transition: 0.5s;
      &.flipped {
        // animation-name: test_an;
        transition: 0.5s;
        transform: rotateY(0deg); 
      }
    }

    #timer {
      width: $timer_size;
      height: $timer_size;
      max-width: $timer_max_size;
      max-height: $timer_max_size;
      backface-visibility: hidden;
      margin: 0 auto;
      // font-size: 14vw;
      @media screen and (min-width: 700px) {
        font-size: 64pt;
      }      
      @media screen and (max-width: 700px) {
        font-size: 32pt;
      }    

      transition: 0.5s;
      &.flipped {
      // animation-name: test_an;
        
        transform: rotateY(180deg); 
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
      
      @media screen and (min-width: $timer_max_size/6*10) {
        top: $timer_max_size/3.5 + 15px;
        right: 0;
      }
      @media screen and (max-width: $timer_max_size/6*10) {
        top: $timer_size*math.sqrt(3)/2/3 + 2.5vw;
        right: 0;
      }
    }
  }
}
</style>
