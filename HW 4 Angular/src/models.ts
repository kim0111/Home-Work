export class product {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public price: number,
    ) { }
}


export let products = [
    {
        id: 1,
        title: "CyberPunk 2077",
        description: "kill Adam Smacher",
        price: 50
    },
    {
        id: 2,
        title: "Witcher 3",
        description: "evolve your hero",
        price: 25
    },
    {
        id: 3,
        title: "Metro Exodus",
        description: "kill the monsters Artem",
        price: 25
    },
    {
        id: 4,
        title: "CupHead",
        description: "kill the bosses",
        price: 15
    },
    {
        id: 5,
        title: "Modern Warfare 2",
        description: "GHOST",
        price: 30
    },

]