<template>
    <div id="timer">
        <div id="shell_wrap">
            <div id="shell" v-bind:class="regime"></div>
        </div>
        <div id="timer_text_wrap">
            <span id="text">{{ Math.floor(counter / 60) }}:{{ (counter % 60).toString().padStart(2, '0') }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Timer',
        props: {
            time_seconds: { type: Number, required: true },
            is_running: { type: Number, required: true },
            regime: { type: String, required: true }
        },
        data() {
            return {
                counter: 0,
                timeoutId: null
            }
        },
        mounted() {
            this.counter = Number(this.time_seconds)
        },
        watch: {
            is_running(newValue) {
                this.counter = Number(this.time_seconds)
                if (newValue > 0) {
                    this.start_timer()
                } else {
                    this.stop_timer()
                }
            },
            regime(/*newValue*/) {
                
            },
            time_seconds(newValue) {
                this.counter = Number(newValue)
            }
        },
        methods: {  
            start_timer() {
                this.timeoutId = setInterval(() => {
                    this.counter--
                }, 1000)
            },
            stop_timer() {
                if (this.timeoutId != null) {
                    clearInterval(this.timeoutId)
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "src/styles/global.scss";

    #timer {
        position: relative;

        #shell_wrap {
            width: 100%;
            height: 100%;

            // background-color: $primary-color;
            // border-radius: 50%;
            
            transition: transform 0.5s;
            #shell {
                width: 100%;
                height: 100%;

                border-radius: 50%;
                margin: 0 auto;

                transition: all 0.5s;

                box-shadow: 0.5em 0.5em 1em -0.125em rgba(10,10,10,.2), 0 0 0 1px rgba(10,10,10,.02);

                &.work {
                    background-color: $primary-color;
                }

                &.sbreak {
                    background-color: $short_break_color;
                }

                &.lbreak {
                    background-color: $long_break_color;
                }

                &.choice {
                    background-color: #4D5359;
                }
            }
        }

        &.running #shell_wrap {
            transform: scale(2); 

            #shell {
                -webkit-animation: pulsate-fwd 1s ease-in-out 0.6s infinite both;
                animation: pulsate-fwd 1s ease-in-out 0.6s infinite both;
            }
        }
        &.nRunning #shell_wrap {
            transform: scale(1);
        }

        #timer_text_wrap {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 0; left: 0;

            #text {
                margin: 0 0;
                color: white;
            }
        }   
    }
     
</style>