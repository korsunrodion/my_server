<template>
    <section>
        <b-button @click="clickMe">Click Me</b-button>
    </section>
</template>

<script>
    export default {
        name: 'Test',
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            }
        }
    }
</script>