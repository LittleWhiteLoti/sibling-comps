<script setup>
    import { defineProps, defineExpose, ref } from 'vue';
    import { useStore } from 'vuex'

    const props = defineProps({
        text: String
    })

    let store = useStore()

    function send() {
        store.dispatch('setString', text)
    }

    let text = ref("")

    const emits = defineEmits(['update:text'])

    function updateValue(value) {
        this.text = value
    }

    defineExpose({
        text,
        updateValue
    })


</script>

<template>
    <div>
        This is component 1
        <br />
        <input @input="updateValue($event.target.value)" placeholder="Enter something">
        <br />
        <div>Comp: {{ text }}</div>
        <br />
        <button @click="send">Click to send data to sibling</button>
        <br />
        <br />
    </div>
</template>