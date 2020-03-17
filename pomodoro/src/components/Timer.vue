<template>
    <section class="section">
        <div id="shell" class="container">
            <span id="text"> {{ Math.floor(time_seconds / 60) }}:{{ (time_seconds % 60).toString().padStart(2, '0') }}</span>
        </div>
    </section>
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

    #shell {
        height: 200px;
        width: 200px;
        background-color: $primary-color;
        border-radius: 50%;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;

        #text {
            color: white;
            font-size: 42pt;
        }
    }
</style>