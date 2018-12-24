<template>
    <icon type="svg">
        <iconBug v-if="type === types.BUG"/>
        <iconDark v-if="type === types.DARK"/>
        <iconDragon v-if="type === types.DRAGON" />
        <iconElectric v-if="type === types.ELECTRIC" />
        <iconFairy v-if="type === types.FAIRY" />
        <iconFighting v-if="type === types.FIGHTING" />
        <iconFire v-if="type === types.FIRE" />
        <iconFlying v-if="type === types.FLYING" />
        <iconGhost v-if="type === types.GHOST" />
        <iconGrass v-if="type === types.GRASS" />
        <iconGround v-if="type === types.GROUND" />
        <iconIce v-if="type === types.ICE" />
        <iconNormal v-if="type === types.NORMAL" />
        <iconPoison v-if="type === types.POISON" />
        <iconPsychic v-if="type === types.PSYCHIC" />
        <iconRock v-if="type === types.ROCK" />
        <iconSteel v-if="type === types.STEEL" />
        <iconWater v-if="type === types.WATER" />
    </icon>
</template>
<script>
    import icon from '@/modules/svg-icons';
    import types from '../conf/types';
    import iconBug from '../assets/img/types/icon-bug.svg';
    import iconDark from '../assets/img/types/icon-dark.svg';
    import iconDragon from '../assets/img/types/icon-dragon.svg';
    import iconElectric from '../assets/img/types/icon-electric.svg';
    import iconFairy from '../assets/img/types/icon-fairy.svg';
    import iconFighting from '../assets/img/types/icon-fighting.svg';
    import iconFire from '../assets/img/types/icon-fire.svg';
    import iconFlying from '../assets/img/types/icon-flying.svg';
    import iconGhost from '../assets/img/types/icon-ghost.svg';
    import iconGrass from '../assets/img/types/icon-grass.svg';
    import iconGround from '../assets/img/types/icon-ground.svg';
    import iconIce from '../assets/img/types/icon-ice.svg';
    import iconNormal from '../assets/img/types/icon-normal.svg';
    import iconPoison from '../assets/img/types/icon-poison.svg';
    import iconPsychic from '../assets/img/types/icon-psychic.svg';
    import iconRock from '../assets/img/types/icon-rock.svg';
    import iconSteel from '../assets/img/types/icon-steel.svg';
    import iconWater from '../assets/img/types/icon-water.svg';

    export default {
        name: 'icon-type',
        props: {
            type: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                types,
            };
        },
        components: {
            icon,
            iconBug,
            iconDark,
            iconDragon,
            iconElectric,
            iconFairy,
            iconFighting,
            iconFire,
            iconFlying,
            iconGhost,
            iconGrass,
            iconGround,
            iconIce,
            iconNormal,
            iconPoison,
            iconPsychic,
            iconRock,
            iconSteel,
            iconWater,
        },
    };
</script>
