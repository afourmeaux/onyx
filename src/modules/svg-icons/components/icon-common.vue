<template>
    <span class="icon" :style="style">
        <svg xmlns="http://www.w3.org/2000/svg"
             :width="width"
             :height="height"
             :viewBox="viewbox"
             :aria-labelledby="iconName"
             role="presentation"
        >
            <title :id="iconName">{{ iconName }} icon</title>
            <g :fill="iconColor">
                <slot/>
            </g>
        </svg>
    </span>
</template>
<script>
    export default {
        props: {
            iconName: {
                type: String,
                default: 'box',
            },
            width: {
                type: [Number, String],
                default: 18,
            },
            height: {
                type: [Number, String],
                default: 18,
            },
            iconColor: {
                type: String,
                default: 'currentColor',
            },
            viewbox: {
                type: String,
                default: '0 0 18 18',
            },
            style: {
                type: String,
            },
        },
    };
</script>
