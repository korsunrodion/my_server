<template>
    <div id="ModalSettings">
        <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input class="input" type="text" placeholder="Text input">
        </div>
        </div>

        <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Text input" value="bulma">
            <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </div>
        <p class="help is-success">This username is available</p>
        </div>

        <button class="button is-primary" v-on:click="close">Confirm</button>
    </div>
</template>

<script>
    export default {
        name: 'ModalSettings',

        data() {
            return {
                
            }
        },
        mounted: function () {  
            // this.state = 
        },
        watch: {

        },
        methods: {
            close() {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss">
    @import "src/styles/global.scss";

    #ModalSettings {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        // display: flex;
        // justify-content: center;
        // align-items: center;
    }
</style>