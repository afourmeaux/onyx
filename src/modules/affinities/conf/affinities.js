import types from './types';

export default {
    [types.BUG]: {
        name: types.BUG,
        color: '#9FB237',
        defense: {
            strong: [types.FIGHTING, types.GRASS, types.GROUND],
            weak: [types.FIRE, types.ROCK, types.FLYING],
        },
        attack: {
            strong: [types.GRASS, types.DARK, types.PSYCHIC],
            weak: [
                types.STEEL, types.FIGHTING, types.FAIRY, types.FIRE,
                types.POISON, types.DARK, types.GHOST, types.FLYING,
            ],
        },
    },
    [types.DARK]: {
        name: types.DARK,
        color: '#6F5344',
        defense: {
            strong: [types.GHOST, types.DARK],
            weak: [types.FIGHTING, types.BUG, types.FAIRY],
            imune: [types.PSYCHIC],
        },
        attack: {
            strong: [types.PSYCHIC, types.GHOST],
            weak: [types.FIGHTING, types.DARK, types.STEEL],
        },
    },
    [types.DRAGON]: {
        name: types.DRAGON,
        color: '#7E67EA',
        defense: {
            strong: [types.GRASS, types.FIRE, types.WATER, types.ELECTRIC],
            weak: [types.ICE, types.DRAGON, types.FAIRY],
        },
        attack: {
            strong: [types.DRAGON],
            weak: [types.STEEL],
            imune: [types.FAIRY],
        },
    },
    [types.ELECTRIC]: {
        name: types.ELECTRIC,
        color: '#FECB46',
        defense: {
            strong: [types.FLYING, types.STEEL, types.ELECTRIC],
            weak: [types.GROUND],
        },
        attack: {
            strong: [types.WATER, types.FLYING],
            weak: [types.GRASS, types.ELECTRIC, types.DRAGON],
            imune: [types.GROUND],
        },
    },
    [types.FAIRY]: {
        name: types.FAIRY,
        color: '#FFA6FC',
        defense: {
            strong: [types.FIGHTING, types.DARK, types.BUG],
            weak: [types.POISON, types.STEEL],
            imune: [types.DRAGON],
        },
        attack: {
            strong: [types.DRAGON, types.FIGHTING, types.DARK],
            weak: [types.FIRE, types.POISON, types.STEEL],
        },
    },
    [types.FIGHTING]: {
        name: types.FIGHTING,
        color: '#B05646',
        defense: {
            strong: [types.DARK, types.BUG, types.ROCK],
            weak: [types.FLYING, types.PSYCHIC, types.FAIRY],
        },
        attack: {
            strong: [types.NORMAL, types.ROCK, types.ICE, types.STEEL, types.DARK],
            weak: [types.BUG, types.FLYING, types.POISON, types.PSYCHIC, types.FAIRY],
            imune: [types.GHOST],
        },
    },
    [types.FIRE]: {
        name: types.FIRE,
        color: '#FF4527',
        defense: {
            strong: [types.FIRE, types.BUG, types.ICE, types.STEEL, types.GRASS, types.FAIRY],
            weak: [types.WATER, types.GROUND, types.ROCK],
        },
        attack: {
            strong: [types.GRASS, types.STEEL, types.BUG, types.ICE],
            weak: [types.FIRE, types.WATER, types.ROCK, types.DRAGON],
        },
    },
    [types.FLYING]: {
        name: types.FLYING,
        color: '#6895FC',
        defense: {
            strong: [types.FIGHTING, types.BUG, types.GRASS],
            weak: [types.ICE, types.ELECTRIC, types.ROCK],
            imune: [types.GROUND],
        },
        attack: {
            strong: [types.GRASS, types.FIGHTING, types.BUG],
            weak: [types.ELECTRIC, types.STEEL, types.ROCK],
        },
    },
    [types.GHOST]: {
        name: types.GHOST,
        color: '#6360B0',
        defense: {
            strong: [types.BUG, types.POISON],
            weak: [types.DARK, types.GHOST],
            imune: [types.FIGHTING, types.NORMAL],
        },
        attack: {
            strong: [types.GHOST, types.PSYCHIC],
            weak: [types.DARK],
            imune: [types.NORMAL],
        },
    },
    [types.GRASS]: {
        name: types.GRASS,
        color: '#74CC5F',
        defense: {
            strong: [types.ELECTRIC, types.WATER, types.GROUND, types.GRASS],
            weak: [types.ICE, types.FIRE, types.FLYING, types.BUG, types.POISON],
        },
        attack: {
            strong: [types.WATER, types.ROCK, types.GROUND],
            weak: [
                types.FIRE, types.GRASS, types.STEEL, types.DRAGON,
                types.FLYING, types.BUG, types.POISON,
            ],
        },
    },
    [types.GROUND]: {
        name: types.GROUND,
        color: '#DCBB5D',
        defense: {
            strong: [types.POISON, types.ROCK],
            weak: [types.ICE, types.WATER, types.GRASS],
            imune: [types.ELECTRIC],
        },
        attack: {
            strong: [types.ELECTRIC, types.STEEL, types.POISON, types.FIRE, types.ROCK],
            weak: [types.BUG, types.GRASS],
            imune: [types.FLYING],
        },
    },
    [types.ICE]: {
        name: types.ICE,
        color: '#76DBFE',
        defense: {
            strong: [types.ICE],
            weak: [types.FIRE, types.ROCK, types.STEEL, types.FIGHTING],
        },
        attack: {
            strong: [types.GROUND, types.FLYING, types.GRASS, types.DRAGON],
            weak: [types.STEEL, types.FIRE, types.WATER, types.ICE],
        },
    },
    [types.NORMAL]: {
        name: types.NORMAL,
        color: '#B9BAA9',
        defense: {
            weak: [types.FIGHTING],
            imune: [types.GHOST],
        },
        attack: {
            weak: [types.STEEL, types.ROCK],
            imune: [types.GHOST],
        },
    },
    [types.POISON]: {
        name: types.POISON,
        color: '#A95495',
        defense: {
            strong: [types.GRASS, types.BUG, types.POISON, types.FIGHTING, types.FAIRY],
            weak: [types.GROUND, types.PSYCHIC],
        },
        attack: {
            strong: [types.GRASS, types.FAIRY],
            weak: [types.POISON, types.ROCK, types.GROUND, types.GHOST],
            imune: [types.STEEL],
        },
    },
    [types.PSYCHIC]: {
        name: types.PSYCHIC,
        color: '#FF5395',
        defense: {
            strong: [types.FIGHTING, types.PSYCHIC],
            weak: [types.BUG, types.GHOST, types.DARK],
        },
        attack: {
            strong: [types.FIGHTING, types.POISON],
            weak: [types.PSYCHIC, types.STEEL],
            imune: [types.DARK],
        },
    },
    [types.ROCK]: {
        name: types.ROCK,
        color: '#B9A96A',
        defense: {
            strong: [types.FIRE, types.NORMAL, types.POISON, types.FLYING],
            weak: [
                types.WATER, types.GRASS, types.GROUND,
                types.FIGHTING, types.STEEL,
            ],
        },
        attack: {
            strong: [types.FIRE, types.FLYING, types.ICE, types.BUG],
            weak: [types.GROUND, types.STEEL, types.FIGHTING],
        },
    },
    [types.STEEL]: {
        name: types.STEEL,
        color: '#A9A8B9',
        defense: {
            strong: [
                types.NORMAL, types.STEEL, types.GRASS, types.DRAGON, types.ICE,
                types.FLYING, types.ROCK, types.PSYCHIC, types.BUG, types.FAIRY,
            ],
            weak: [types.GROUND, types.FIRE, types.FIGHTING],
            imune: [types.POISON],
        },
        attack: {
            strong: [types.ICE, types.ROCK, types.FAIRY],
            weak: [types.FIRE, types.ELECTRIC, types.STEEL, types.WATER],
        },
    },
    [types.WATER]: {
        name: types.WATER,
        color: '#3995FC',
        defense: {
            strong: [types.FIRE, types.ICE, types.STEEL, types.WATER],
            weak: [types.ELECTRIC, types.GRASS],
        },
        attack: {
            strong: [types.FIRE, types.ROCK, types.GROUND],
            weak: [types.WATER, types.GRASS, types.DRAGON],
        },
    },
};
