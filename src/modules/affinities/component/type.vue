<template>
    <div :class="`type type-${type.name}`" :style="'color:' + type.color + ';'">
        <iconType :type="type.name" />
        <span class="name">{{ type.name }}</span>
    </div>
</template>
<script>
    import iconType from './icon-type';

    export default {
        name: 'type',
        props: {
            type: {
                type: Object,
                required: true,
            },
        },
        components: {
            iconType,
        },
    };
</script>
<style lang="scss">
    @import "../styles/type";
</style>
