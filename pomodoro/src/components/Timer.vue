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
        props: { time_seconds: { type: Number, required: true } },
        methods: {  
            setTime(seconds) {
                this.time_seconds = seconds
            }
        }
    }
</script>

<style lang="scss">
    @import "src/styles/global.scss";

    #timer {
        position: relative;
        // width: 200px;
        // height: 200px;
        height: 100%;
        width: 100%;

        // padding: 5% 0;
        // margin: 5% 0;

        // border: 1px solid black;
    }

    #shell {
        width: 100%;
        height: 100%;
        background-color: $primary-color;
        border-radius: 50%;
        margin: 0 auto;

        position: absolute;
        left: 0; top: 0;
    }

    #timer_text_wrap {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        top: 0; left: 0;

        #text {
            margin: 0 0;
            color: white;
            // font-size: 42pt;
        }
    }    
</style>