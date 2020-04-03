<template>
    <div id="timer">
        <div id="shell"></div>
        <div id="timer_text_wrap">
            <span id="text">{{ Math.floor(time_seconds / 60) }}:{{ (time_seconds % 60).toString().padStart(2, '0') }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Timer',
        props: {
            time_seconds: { type: Number, required: true },
            is_running: { type: Number, required: true }
        },
        data() {
            return {
                initial_time: this.time_seconds,
                counter: 0,
                timeoutId: null
            }
        },
        watch: {
            is_running(newValue) {
                if (newValue > 0) {
                    this.counter = this.time_seconds
                } else {
                    this.counter = 0
                }
            },
            counter(newCounter) {
                if (newCounter > 0) {  
                    setTimeout(() => {
                        this.counter--
                        console.log(this.time_seconds)
                    }, 1000);
                } 
            }
        },
        methods: {  

        }
    }
</script>

<style lang="scss">
    @import "src/styles/global.scss";

    #timer {
        position: relative;

        #shell {
            width: 100%;
            height: 100%;

            background-color: $primary-color;
            border-radius: 50%;
            margin: 0 auto;

            transition: transform 0.5s;
        }

        &.running #shell {
            transform: scale(2);

        }
        &.nRunning #shell {
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