<template>
    <div id="settings">
        <div id="shell2"></div>
        <!-- <div id="timer_text_wrap2">
            
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'Settings',
        props: {
        },
        data() {
            return {

            }
        },
        mounted() {

        },
        watch: {

        },
        methods: {  

        }
    }
</script>

<style lang="scss">
    @import "src/styles/global.scss";

    #settings {
        position: relative;

        #shell2 {
            width: 100%;
            height: 100%;

            background-color: $primary-color;
            border-radius: 50%;
            // margin: 0 auto;
        }

        // #timer_text_wrap2 {
        //     width: 100%;
        //     height: 100%;
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;

        //     position: absolute;
        //     top: 0; left: 0;

        // }   
    }

     
</style>