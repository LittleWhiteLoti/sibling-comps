<script>
        import { useStore } from 'vuex'

        export default {
        data() {
            let store = useStore()
            return {
                store
            }
        },
        computed: {
            text() {
                // Call other methods on this component if you want
                return this.store.getters.getString
            }
        },
        watch: {
            text(newValue) {
                console.log("New String: ", newValue)
            }
        }
    }
</script>


<template>
    <div>
        This is component 2
        <br />
        <br />
        {{ text }}
    </div>
</template>