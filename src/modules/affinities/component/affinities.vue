<template>
    <table class="affinities">
        <caption>Pokemon affinities</caption>
        <tbody>
        <template v-for="(affinity, affinityName) in affinities">
            <tr class="affinity"
                :class="affinity.name"
                v-bind:key="affinity.name + affinityName"
            >
                <th class="main-type">
                    <type :type="affinity"/>
                </th>
                <td class="carac"
                    :class="carac"
                    v-for="carac in ['defense', 'attack']"
                    v-bind:key="affinityName + carac"
                >
                    <table>
                        <caption>{{affinityName}} {{carac}}</caption>
                        <tbody>
                        <tr class="strength"
                            :class="strength"
                            v-for="strength in ['strong', 'weak']"
                            v-bind:key="affinityName + carac + strength"
                            v-if="affinity[carac][strength]
                            || (affinity[carac].imune
                            && (carac === 'attack' && strength === 'weak'
                            || carac === 'defense' && strength === 'strong'))"
                        >
                            <th class="icon" :title="`${carac} ${strength}`">
                                <iconDefense v-if="carac === 'defense'"/>
                                <iconAttack v-if="carac === 'attack'"/>
                            </th>
                            <td class="types">
                                <ul class="type-list">
                                    <li class="type-wrapper"
                                        v-for="(type, key) in affinity[carac][strength]"
                                        v-bind:key="type + key">
                                        <type :type="affinities[type]"/>
                                    </li>
                                    <li class="type-wrapper imune"
                                        v-if="affinity[carac].imune
                                        && (carac === 'attack' && strength === 'weak'
                                            || carac === 'defense' && strength === 'strong')"
                                        v-for="(type, key) in affinity[carac].imune"
                                        v-bind:key="key">
                                        <type :type="affinities[type]"/>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </template>
        </tbody>
    </table>
</template>

<script>
    import affinities from '../conf/affinities';
    import type from './type';
    import iconDefense from '../assets/img/icon-defense.svg';
    import iconAttack from '../assets/img/icon-attack.svg';

    export default {
        name: 'affinities',
        data() {
            return {
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
