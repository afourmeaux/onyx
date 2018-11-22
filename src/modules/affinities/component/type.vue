<template>
    <div class="type" :style="'background:' + type.color + ';'">
        <iconDefense :style="'background:' + type.color + ';'" />
        {{ type.name }}
    </div>
</template>
<script>
    import iconDefense from '../assets/img/icon-defense';

    export default {
        name: 'type',
        props: {
            type: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {};
        },
        components: {
            iconDefense,
        },
    };
</script>
<style lang="scss">
    @import "../styles/type";
</style>
