<template>
    <div id="control" ref="control">
        <div id="work_btn" ref="work" v-bind:class="{active: (state=='work'), choice: (state=='choice')}" v-on:click="clicked('work')">W</div>
        <div id="sbreak_btn" ref="sbreak" v-bind:class="{active: (state=='sbreak'), choice: (state=='choice')}" v-on:click="clicked('sbreak')">S</div>
        <div id="lbreak_btn" ref="lbreak" v-bind:class="{active: (state=='lbreak'), choice: (state=='choice')}" v-on:click="clicked('lbreak')">L</div>
    </div>
</template>

<script>
    export default {
        name: 'ModeControl',

        // props: {
        //     state_prop: { type: String, required: true },
        // },

        data() {
            return { 
                state: 'work'
            }
        },
        mounted: function () {  
            // this.state = 
        },
        watch: {
            state: function() {
                this.$emit('state_changed', this.state)
            }
        },
        methods: {
            set_state(newState) {
                this.state = newState
            },
            get_state() {
                return this.state
            },
            set_mode(newMode) {
                this.mode = newMode
            },
            clicked(btn_name) {
                if (this.state != 'choice') {
                    this.state = 'choice'
                } else if (this.state == 'choice') {
                    this.state = btn_name
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "src/styles/global.scss";

    #control {
        position: relative;

        div {
            height: $control-size;
            width: $control-size;
            max-height: $control-max-size;
            max-width: $control-max-size;
            background-color: $primary-color;
            border-radius: 50%;

            box-shadow: 0.5em 0.5em 1em -0.125em rgba(10,10,10,0.2), 0 0 0 1px rgba(10,10,10,.02);

            display: flex;
            justify-content: center;
            align-items: center;

            color: white;

            position: absolute;
            visibility: hidden;
            opacity: 0;

            transition-timing-function: ease-out;
            transition: 0.5s;

            &.active {
                visibility: visible;
                opacity: 1;
                // transform: scale(1.2);
            }   


            &.choice {
                visibility: visible;
                opacity: 1;
                transform: scale(1.2);
            }   

            @media screen and (min-width: $timer_max_size/6*10) {
                &#work_btn {
                    left: -50px;
                    // top: 40px;
                }

                &#sbreak_btn {
                    top: 110px;
                    left: 10px;
                    background-color: $short-break-color;
                }

                &#lbreak_btn {
                    top: 230px;
                    left: 20px;
                    background-color: $long-break-color;
                }
            }
            @media screen and (max-width: $timer_max_size/6*10) {
                &#work_btn {
                    left: -5vw;
                }

                &#sbreak_btn {
                    top: 15vw;
                    left: 2vw;
                    background-color: $short-break-color;
                }

                &#lbreak_btn {
                    top: 30vw;
                    left: 2vw;
                    background-color: $long-break-color;
                }
                // padding: $timer_size*math.sqrt(3)/2/3 0 0 0;
            }

        }
    }
</style>