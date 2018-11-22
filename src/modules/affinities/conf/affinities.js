const BUG = 'bug';
const DARK = 'dark';
const DRAGON = 'dragon';
const ELECTRIC = 'electric';
const FAIRY = 'fairy';
const FIGHTING = 'fighting';
const FIRE = 'fire';
const FLYING = 'flying';
const GHOST = 'ghost';
const GRASS = 'grass';
const GROUND = 'ground';
const ICE = 'ice';
const NORMAL = 'normal';
const POISON = 'poison';
const PSYCHIC = 'psychic';
const ROCK = 'rock';
const STEEL = 'steel';
const WATER = 'water';

export default {
    [BUG]: {
        name: BUG,
        color: '#9FB237',
        defense: {
            strong: [FIGHTING, GRASS, GROUND],
            weak: [FIRE, ROCK, FLYING],
        },
        attack: {
            strong: [GRASS, DARK, PSYCHIC],
            weak: [STEEL, FIGHTING, FAIRY, FIRE, POISON, DARK, GHOST, FLYING],
        },
    },
    [DARK]: {
        name: DARK,
        color: '#6F5344',
        defense: {
            strong: [GHOST, DARK],
            weak: [FIGHTING, BUG, FAIRY],
            imune: [PSYCHIC],
        },
        attack: {
            strong: [PSYCHIC, GHOST],
            weak: [FIGHTING, DARK, STEEL],
        },
    },
    [DRAGON]: {
        name: DRAGON,
        color: '#7E67EA',
        defense: {
            strong: [GRASS, FIRE, WATER, ELECTRIC],
            weak: [ICE, DRAGON, FAIRY],
        },
        attack: {
            strong: [DRAGON],
            weak: [STEEL],
            imune: [FAIRY],
        },
    },
    [ELECTRIC]: {
        name: ELECTRIC,
        color: '#FECB46',
        defense: {
            strong: [FLYING, STEEL, ELECTRIC],
            weak: [GROUND],
        },
        attack: {
            strong: [WATER, FLYING],
            weak: [GRASS, ELECTRIC, DRAGON],
            imune: [GROUND],
        },
    },
    [FAIRY]: {
        name: FAIRY,
        color: '#FFA6FC',
        defense: {
            strong: [FIGHTING, DARK, BUG],
            weak: [POISON, STEEL],
            imune: [DRAGON],
        },
        attack: {
            strong: [DRAGON, FIGHTING, DARK],
            weak: [FIRE, POISON, STEEL],
        },
    },
    [FIGHTING]: {
        name: FIGHTING,
        color: '#B05646',
        defense: {
            strong: [DARK, BUG, ROCK],
            weak: [FLYING, PSYCHIC, FAIRY],
        },
        attack: {
            strong: [NORMAL, ROCK, ICE, STEEL, DARK],
            weak: [BUG, FLYING, POISON, PSYCHIC, FAIRY],
            imune: [GHOST],
        },
    },
    [FIRE]: {
        name: FIRE,
        color: '#FF4527',
        defense: {
            strong: [FIRE, BUG, ICE, STEEL, GRASS, FAIRY],
            weak: [WATER, GROUND, ROCK],
        },
        attack: {
            strong: [GRASS, STEEL, BUG, ICE],
            weak: [FIRE, WATER, ROCK, DRAGON],
        },
    },
    [FLYING]: {
        name: FLYING,
        color: '#6895FC',
        defense: {
            strong: [FIGHTING, BUG, GRASS],
            weak: [ICE, ELECTRIC, ROCK],
            imune: [GROUND],
        },
        attack: {
            strong: [GRASS, FIGHTING, BUG],
            weak: [ELECTRIC, STEEL, ROCK],
        },
    },
    [GHOST]: {
        name: GHOST,
        color: '#6360B0',
        defense: {
            strong: [BUG, POISON],
            weak: [DARK, GHOST],
            imune: [FIGHTING, NORMAL],
        },
        attack: {
            strong: [GHOST, PSYCHIC],
            weak: [DARK],
            imune: [NORMAL],
        },
    },
    [GRASS]: {
        name: GRASS,
        color: '#74CC5F',
        defense: {
            strong: [ELECTRIC, WATER, GROUND, GRASS],
            weak: [ICE, FIRE, FLYING, BUG, POISON],
        },
        attack: {
            strong: [WATER, ROCK, GROUND],
            weak: [FIRE, GRASS, STEEL, DRAGON, FLYING, BUG, POISON],
        },
    },
    [GROUND]: {
        name: GROUND,
        color: '#DCBB5D',
        defense: {
            strong: [POISON, ROCK],
            weak: [ICE, WATER, GRASS],
            imune: [ELECTRIC],
        },
        attack: {
            strong: [ELECTRIC, STEEL, POISON, FIRE, ROCK],
            weak: [BUG, GRASS],
            imune: [FLYING],
        },
    },
    [ICE]: {
        name: ICE,
        color: '#76DBFE',
        defense: {
            strong: [ICE],
            weak: [FIRE, ROCK, STEEL, FIGHTING],
        },
        attack: {
            strong: [GROUND, FLYING, GRASS, DRAGON],
            weak: [STEEL, FIRE, WATER, ICE],
        },
    },
    [NORMAL]: {
        name: NORMAL,
        color: '#B9BAA9',
        defense: {
            weak: [FIGHTING],
            imune: [GHOST],
        },
        attack: {
            weak: [STEEL, ROCK],
            imune: [GHOST],
        },
    },
    [POISON]: {
        name: POISON,
        color: '#A95495',
        defense: {
            strong: [GRASS, BUG, POISON, FIGHTING, FAIRY],
            weak: [GROUND, PSYCHIC],
        },
        attack: {
            strong: [GRASS, FAIRY],
            weak: [POISON, ROCK, GROUND, GHOST],
            imune: [STEEL],
        },
    },
    [PSYCHIC]: {
        name: PSYCHIC,
        color: '#FF5395',
        defense: {
            strong: [FIGHTING, PSYCHIC],
            weak: [BUG, GHOST, DARK],
        },
        attack: {
            strong: [FIGHTING, POISON],
            weak: [PSYCHIC, STEEL],
            imune: [DARK],
        },
    },
    [ROCK]: {
        name: ROCK,
        color: '#B9A96A',
        defense: {
            strong: [FIRE, NORMAL, POISON, FLYING],
            weak: [WATER, GRASS, GROUND, FIGHTING, STEEL],
        },
        attack: {
            strong: [FIRE, FLYING, ICE, BUG],
            weak: [GROUND, STEEL, FIGHTING],
        },
    },
    [STEEL]: {
        name: STEEL,
        color: '#A9A8B9',
        defense: {
            strong: [NORMAL, STEEL, GRASS, DRAGON, ICE, FLYING, ROCK, PSYCHIC, BUG, FAIRY],
            weak: [GROUND, FIRE, FIGHTING],
            imune: [POISON],
        },
        attack: {
            strong: [ICE, ROCK, FAIRY],
            weak: [FIRE, ELECTRIC, STEEL, WATER],
        },
    },
    [WATER]: {
        name: WATER,
        color: '#3995FC',
        defense: {
            strong: [FIRE, ICE, STEEL, WATER],
            weak: [ELECTRIC, GRASS],
        },
        attack: {
            strong: [FIRE, ROCK, GROUND],
            weak: [WATER, GRASS, DRAGON],
        },
    },
};
