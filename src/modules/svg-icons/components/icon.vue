<template>
    <span class="icon">
        <slot v-if="type === 'svg'" />
        <img v-else :src="iconPath" >
    </span>
</template>
<script>
    export default {
        name: 'icon',
        props: {
            type: {
                type: String,
                default: 'jpg',
            },
        },
        computed: {
            iconPath() {
                return `/assets/img/${this.type.toLowerCase()}`;
            },
        },
    };
</script>
