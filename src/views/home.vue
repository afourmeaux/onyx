<template>
    <div>
        <affinities />
    </div>
</template>
<script>
    import affinities from '@/modules/affinities';

    export default {
        name: 'home',
        components: {
            affinities,
        },
    };
</script>
<style lang="scss">
    @import '../styles/reset';

    body {
        /*background: linear-gradient(#3CF4C0, #3BE0CB);*/
        background-attachment: fixed;
    }
</style>
