<template>
    <ul>
        <li class="type-container" v-for="(type, key) in affinities" v-bind:key="key">
            <div class="defense">
                <div class="strong">
                    <div class="imune" v-if="type.defense.imune">
                        <type v-for="(typeDefenseImune, key) in type.defense.imune"
                              :type="affinities[typeDefenseImune]"
                              v-bind:key="key"
                        />
                    </div>
                    <type v-for="(typeDefenseStrong, key) in type.defense.strong"
                          :type="affinities[typeDefenseStrong]"
                          v-bind:key="key"
                    />
                    <iconDefense />
                </div><br/>
                <div class="weak">
                    <type v-for="(typeDefenseWeak, key) in type.defense.weak"
                          :type="affinities[typeDefenseWeak]"
                          v-bind:key="key"
                    />
                    <iconDefense />
                </div>
            </div>
            <div class="main-type">
                <type :type="type" />
            </div>
            <div class="attack">
                <div class="strong">
                    <iconAttack />
                    <type v-for="(typeAttackStrong, key) in type.attack.strong"
                          :type="affinities[typeAttackStrong]"
                          v-bind:key="key"
                    />
                </div><br/>
                <div class="weak">
                    <iconAttack />
                    <type v-for="(typeAttackWeak, key) in type.attack.weak"
                          :type="affinities[typeAttackWeak]"
                          v-bind:key="key"
                    />
                    <span class="imune" v-if="type.attack.imune">
                        <type v-for="(typeAttackImune, key) in type.attack.imune"
                              :type="affinities[typeAttackImune]"
                              v-bind:key="key"
                        />
                    </span>
                </div>
            </div>
        </li><br />
    </ul>
</template>

<script>
    import affinities from '../conf/affinities';
    import type from './type';
    import iconDefense from '../assets/img/icon-defense';
    import iconAttack from '../assets/img/icon-attack';

    export default {
        name: 'affinities',
        data() {
            return {
                // typeColors: {
                //     [BUG]: '#9FB237',
                //     [DARK]: '#6F5344',
                //     [DRAGON]: '#7E67EA',
                //     [ELECTRIC]: '#FECB46',
                //     [FAIRY]: '#FFA6FC',
                //     [FIGHTING]: '#B05646',
                //     [FIRE]: '#FF4527',
                //     [FLYING]: '#6895FC',
                //     [GHOST]: '#6360B0',
                //     [GRASS]: '#74CC5F',
                //     [GROUND]: '#DCBB5D',
                //     [ICE]: '#76DBFE',
                //     [NORMAL]: '#B9BAA9',
                //     [POISON]: '#A95495',
                //     [PSYCHIC]: '#FF5395',
                //     [ROCK]: '#B9A96A',
                //     [STEEL]: '#A9A8B9',
                //     [WATER]: '#3995FC',
                // },
                affinities,
            };
        },
        components: {
            type,
            iconDefense,
            iconAttack,
        },
    };
</script>
<style lang="scss">
    @import "../styles/affinities";
</style>
