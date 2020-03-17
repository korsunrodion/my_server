<template>
    <div id="control" ref="control">
        <div id="work_btn" ref="work" v-on:click="clicked('work')">W</div>
        <div id="sbreak_btn" ref="sbreak" v-on:click="clicked('sbreak')">S</div>
        <div id="lbreak_btn" ref="lbreak" v-on:click="clicked('lbreak')">L</div>
    </div>
</template>

<script>
    var assert = require('assert');

    var fade = function(el) {
        el.style.visibility = 'hidden'
    }

    var appear = function(el) {
        el.style.visibility = 'visible'
    }

    var MODES = ['work', 'sbreak', 'lbreak']

    var STATES = ['set', 'choice']

    export default {
        name: 'ModeControl',

        data() {
            return {
                state: null,
                mode: null,
            }
        },
        mounted: function () {
            this.state = 'set'
            this.mode = 'work'
        },
        watch: {
            // '#work_btn': function () {}
            mode: function(newMode) {
                console.log('check', newMode)

                // this.$anime.timeline().add({
                    
                // })

                switch(newMode) {
                    case 'work':
                        appear(this.$refs.work)
                        fade(this.$refs.sbreak)
                        fade(this.$refs.lbreak)
                    break;
                    case 'sbreak':
                        appear(this.$refs.sbreak)
                        fade(this.$refs.work)
                        fade(this.$refs.lbreak)
                    break;
                    case 'lbreak':
                        appear(this.$refs.lbreak)
                        fade(this.$refs.sbreak)
                        fade(this.$refs.work)
                    break;
                }
            },
            state: function(newState) {
                if (newState == 'choice') {
                    appear(this.$refs.work)
                    appear(this.$refs.sbreak)
                    appear(this.$refs.lbreak)
                }
            }
        },
        methods: {
            set_state(newState) {
                assert(STATES.includes(newState))
                this.state = newState
            },
            get_state() {
                return this.state
            },
            set_mode(newMode) {
                assert(MODES.include(newMode))
                this.mode = newMode
            },
            clicked(btn_name) {
                console.log(this)
                if (this.state == 'set') {
                    this.state = 'choice'
                } else if (this.state == 'choice') {
                    this.mode = btn_name
                    this.state = 'set'
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "src/styles/global.scss";

    #control {
        border: 1px solid black;
        position: relative;

        div {
            height: 50px;
            width: 50px;
            background-color: $primary-color;
            border-radius: 50%;

            display: flex;
            justify-content: center;
            align-items: center;

            color: white;

            position: absolute;

            &#work_btn {
                right: -25px;
            }

            &#sbreak_btn {
                top: 70px;
                left: 0px;
            }

            &#lbreak_btn {
                top: 140px;
                right: -25px;
            }
        }
    }
</style>