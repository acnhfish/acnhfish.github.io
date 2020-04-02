var northern = new Object();
var southern = new Object();
var bugs = new Array();

/*
bugs.filter(bug => bug.Bug === "Evening Cicada")
*/

bugs = [
    {
        Bug: "Agrias Butterfly",
        Location: 2,
        Value: 3000,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        Bug: "Ant",
        Location: 10,
        Value: 80,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Atlas Moth",
        Location: 13,
        Value: 3000,
        StartTime: 19,
        EndTime: 4,
        NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        Bug: "Bagworm",
        Location: 1,
        Value: 600,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Banded Dragonfly",
        Location: 2,
        Value: 4500,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        Bug: "Bell Cricket",
        Location: 7,
        Value: 430,
        StartTime: 17,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        SouthMonths: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Blue Weevil Beetle",
        Location: 13,
        Value: 0,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Brown Cicada",
        Location: 13,
        Value: 250,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Centipede",
        Location: 4,
        Value: 300,
        StartTime: 16,
        EndTime: 23,
        NorthMonths: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        SouthMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Cicada Shell",
        Location: 13,
        Value: 0,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Citrus Long-horned Beetle",
        Location: 12,
        Value: 350,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Common Bluebottle",
        Location: 2,
        Value: 300,
        StartTime: 4,
        EndTime: 19,
        NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        Bug: "Common Butterfly",
        Location: 2,
        Value: 160,
        StartTime: 4,
        EndTime: 19,
        NorthMonths: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        SouthMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Cricket",
        Location: 7,
        Value: 130,
        StartTime: 17,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        SouthMonths: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Cyclommatus Stag",
        Location: 13,
        Value: 0,
        StartTime: 17,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Damselfly",
        Location: 2,
        Value: 500,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        SouthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
    },
    {
        Bug: "Darner Dragonfly",
        Location: 2,
        Value: 230,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        Bug: "Diving Beetle",
        Location: 17,
        Value: 800,
        StartTime: 8,
        EndTime: 19,
        NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        Bug: "Drone Beetle",
        Location: 13,
        Value: 200,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
        Bug: "Dung Beetle",
        Location: 7,
        Value: 0,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        SouthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
    },
    {
        Bug: "Earth-boring Dung Beetle",
        Location: 7,
        Value: 300,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Emperor Butterfly",
        Location: 2,
        Value: 4000,
        StartTime: 17,
        EndTime: 8,
        NorthMonths: [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        SouthMonths: [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1]
    },
    {
        Bug: "Evening Cicada (morning)",
        Location: 13,
        Value: 0,
        StartTime: 4,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Evening Cicada (evening)",
        Location: 13,
        Value: 0,
        StartTime: 16,
        EndTime: 19,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Firefly",
        Location: 2,
        Value: 300,
        StartTime: 19,
        EndTime: 4,
        NorthMonths: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        SouthMonths: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Flea",
        Location: 14,
        Value: 70,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        Bug: "Fly",
        Location: 11,
        Value: 0,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Giant Cicada",
        Location: 13,
        Value: 0,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Giant Stag",
        Location: 13,
        Value: 0,
        StartTime: 23,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Giant Water Bug",
        Location: 17,
        Value: 2000,
        StartTime: 19,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        Bug: "Giraffe Stag",
        Location: 13,
        Value: 0,
        StartTime: 17,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Golden Stag",
        Location: 13,
        Value: 0,
        StartTime: 17,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Goliath Beetle",
        Location: 13,
        Value: 8000,
        StartTime: 17,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
        Bug: "Grasshopper",
        Location: 7,
        Value: 160,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Great Purple Emperor",
        Location: 2,
        Value: 0,
        StartTime: 4,
        EndTime: 19,
        NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
        Bug: "Hermit Crab",
        Location: 0,
        Value: 1000,
        StartTime: 19,
        EndTime: 8,
        NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Honeybee",
        Location: 2,
        Value: 200,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        SouthMonths: [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        Bug: "Horned Atlas",
        Location: 13,
        Value: 0,
        StartTime: 17,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Horned Dynastid",
        Location: 13,
        Value: 0,
        StartTime: 17,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Horned Elephant",
        Location: 13,
        Value: 0,
        StartTime: 17,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Horned Herucles",
        Location: 13,
        Value: 0,
        StartTime: 17,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Jewel Beetle",
        Location: 13,
        Value: 2400,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        Bug: "Ladybug",
        Location: 6,
        Value: 200,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
        SouthMonths: [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        Bug: "Long Locust",
        Location: 7,
        Value: 200,
        StartTime: 8,
        EndTime: 19,
        NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        Bug: "Madagascan Sunset Moth",
        Location: 2,
        Value: 2500,
        StartTime: 8,
        EndTime: 16,
        NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        Bug: "Man-faced Stink Bug",
        Location: 6,
        Value: 1000,
        StartTime: 19,
        EndTime: 8,
        NorthMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        Bug: "Mantis",
        Location: 6,
        Value: 430,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        Bug: "Migratory Locust",
        Location: 7,
        Value: 600,
        StartTime: 8,
        EndTime: 19,
        NorthMonths: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        SouthMonths: [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Miyama Stag",
        Location: 13,
        Value: 0,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Mole Cricket",
        Location: 18,
        Value: 500,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        SouthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0]
    },
    {
        Bug: "Monach Butterfly",
        Location: 2,
        Value: 140,
        StartTime: 4,
        EndTime: 17,
        NorthMonths: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        SouthMonths: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Mosquito",
        Location: 2,
        Value: 130,
        StartTime: 17,
        EndTime: 4,
        NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
        Bug: "Moth",
        Location: 3,
        Value: 130,
        StartTime: 19,
        EndTime: 4,
        NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Orchid Mantis",
        Location: 15,
        Value: 2400,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        Bug: "Paper Kite Butterfly",
        Location: 2,
        Value: 1000,
        StartTime: 8,
        EndTime: 19,
        NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Peacock Butterfly",
        Location: 2,
        Value: 2500,
        StartTime: 4,
        EndTime: 19,
        NorthMonths: [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        SouthMonths: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        Bug: "Pill Bug",
        Location: 4,
        Value: 250,
        StartTime: 23,
        EndTime: 16,
        NorthMonths: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        SouthMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Pondskater",
        Location: 16,
        Value: 130,
        StartTime: 8,
        EndTime: 19,
        NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        Bug: "Queen Alexandra's Birdwing",
        Location: 2,
        Value: 4000,
        StartTime: 8,
        EndTime: 16,
        NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        Bug: "Rainbow Stag",
        Location: 13,
        Value: 6000,
        StartTime: 19,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
        Bug: "Raja Brooke's Birdwing",
        Location: 2,
        Value: 2500,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        SouthMonths: [1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1]
    },
    {
        Bug: "Red Dragonfly",
        Location: 2,
        Value: 180,
        StartTime: 8,
        EndTime: 19,
        NorthMonths: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        SouthMonths: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Rice Grasshopper",
        Location: 7,
        Value: 160,
        StartTime: 8,
        EndTime: 19,
        NorthMonths: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        SouthMonths: [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Robust Cicada",
        Location: 13,
        Value: 0,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Rosalia Batesi Beetle",
        Location: 12,
        Value: 3000,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        Bug: "Saw Stag",
        Location: 13,
        Value: 0,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Scarab Beetle",
        Location: 13,
        Value: 0,
        StartTime: 23,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Scorpion",
        Location: 7,
        Value: 8000,
        StartTime: 19,
        EndTime: 4,
        NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        Bug: "Snail",
        Location: 8,
        Value: 250,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Spider",
        Location: 1,
        Value: 480,
        StartTime: 19,
        EndTime: 8,
        NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Stinkbug",
        Location: 6,
        Value: 120,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        Bug: "Tarantula",
        Location: 7,
        Value: 8000,
        StartTime: 19,
        EndTime: 4,
        NorthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        SouthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0]
    },
    {
        Bug: "Tiger Beetle",
        Location: 7,
        Value: 1500,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        SouthMonths: [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Tiger Butterfly",
        Location: 2,
        Value: 240,
        StartTime: 4,
        EndTime: 19,
        NorthMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        Bug: "Violin Beetle",
        Location: 12,
        Value: 450,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
        SouthMonths: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        Bug: "Walker Cicada",
        Location: 13,
        Value: 400,
        StartTime: 8,
        EndTime: 17,
        NorthMonths: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        SouthMonths: [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Walking Leaf",
        Location: 5,
        Value: 600,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Walking Stick (morning)",
        Location: 1,
        Value: 0,
        StartTime: 4,
        EndTime: 8,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Walking Stick (evening)",
        Location: 1,
        Value: 0,
        StartTime: 17,
        EndTime: 19,
        NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Bug: "Wasp",
        Location: 1,
        Value: 2500,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Wharf Roach",
        Location: 9,
        Value: 200,
        StartTime: 0,
        EndTime: 0,
        NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        Bug: "Yellow Butterfly",
        Location: 2,
        Value: 160,
        StartTime: 4,
        EndTime: 19,
        NorthMonths: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        SouthMonths: [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1]
    }
]

fish = [
    {
      Fish: "Anchovy",
      Location: 5,
      ShadowType: 1,
      Value: 200,
      StartTime: 4,
      EndTime: 21,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Angelfish",
      Location: 2,
      ShadowType: 1,
      Value: 3000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
      Fish: "Arapaima",
      Location: 2,
      ShadowType: 5,
      Value: 10000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Arowana",
      Location: 2,
      ShadowType: 3,
      Value: 10000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Barred Knifejaw",
      Location: 5,
      ShadowType: 2,
      Value: 5000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    },
    {
      Fish: "Barreleye",
      Location: 5,
      ShadowType: 1,
      Value: 15000,
      StartTime: 21,
      EndTime: 4,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Betta",
      Location: 2,
      ShadowType: 1,
      Value: 2500,
      StartTime: 9,
      EndTime: 16,
      NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
      Fish: "Bitterling",
      Location: 2,
      ShadowType: 0,
      Value: 900,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      SouthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
    },
    {
      Fish: "Black Bass",
      Location: 2,
      ShadowType: 3,
      Value: 400,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Blowfish",
      Location: 5,
      ShadowType: 2,
      Value: 5000,
      StartTime: 18,
      EndTime: 4,
      NorthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      SouthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
    },
    {
      Fish: "Blue Marlin",
      Location: 0,
      ShadowType: 4,
      Value: 10000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
      SouthMonths: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0]
    },
    {
      Fish: "Bluegill",
      Location: 2,
      ShadowType: 1,
      Value: 180,
      StartTime: 9,
      EndTime: 16,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Butterfly Fish",
      Location: 5,
      ShadowType: 1,
      Value: 1000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
      Fish: "Carp",
      Location: 1,
      ShadowType: 3,
      Value: 300,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Catfish",
      Location: 1,
      ShadowType: 3,
      Value: 800,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
      Fish: "Char",
      Location: 3,
      ShadowType: 2,
      Value: 3800,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
      SouthMonths: [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    },
    {
      Fish: "Cherry Salmon",
      Location: 2,
      ShadowType: 2,
      Value: 1000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
      SouthMonths: [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    },
    {
      Fish: "Clown Fish",
      Location: 5,
      ShadowType: 0,
      Value: 650,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
      Fish: "Coelacanth",
      Location: 6,
      ShadowType: 5,
      Value: 15000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Crawfish",
      Location: 1,
      ShadowType: 1,
      Value: 200,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
      Fish: "Crucian Carp",
      Location: 2,
      ShadowType: 1,
      Value: 160,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Dab",
      Location: 5,
      ShadowType: 2,
      Value: 300,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
      SouthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    },
    {
      Fish: "Dace",
      Location: 2,
      ShadowType: 2,
      Value: 240,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Dorado",
      Location: 2,
      ShadowType: 4,
      Value: 15000,
      StartTime: 4,
      EndTime: 21,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Football Fish",
      Location: 5,
      ShadowType: 3,
      Value: 2500,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      SouthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
    },
    {
      Fish: "Freshwater Goby",
      Location: 2,
      ShadowType: 1,
      Value: 400,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Frog",
      Location: 1,
      ShadowType: 1,
      Value: 120,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
      Fish: "Gar",
      Location: 1,
      ShadowType: 5,
      Value: 6000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
      SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      Fish: "Giant Snakehead",
      Location: 1,
      ShadowType: 4,
      Value: 5500,
      StartTime: 9,
      EndTime: 16,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Giant Trevally",
      Location: 0,
      ShadowType: 3,
      Value: 4500,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
      Fish: "Golden Trout",
      Location: 3,
      ShadowType: 3,
      Value: 15000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
      SouthMonths: [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    },
    {
      Fish: "Goldfish",
      Location: 1,
      ShadowType: 0,
      Value: 1300,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Great White Shark",
      Location: 5,
      ShadowType: 6,
      Value: 15000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Guppy",
      Location: 2,
      ShadowType: 0,
      Value: 1300,
      StartTime: 9,
      EndTime: 16,
      NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
    },
    {
      Fish: "Hammerhead Shark",
      Location: 5,
      ShadowType: 6,
      Value: 8000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Horse Mackerel",
      Location: 5,
      ShadowType: 1,
      Value: 150,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Killifish",
      Location: 1,
      ShadowType: 0,
      Value: 300,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
      Fish: "King Salmon",
      Location: 4,
      ShadowType: 0,
      Value: 1800,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      SouthMonths: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      Fish: "Koi",
      Location: 1,
      ShadowType: 3,
      Value: 4000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Loach",
      Location: 2,
      ShadowType: 1,
      Value: 400,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      SouthMonths: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]
    },
    {
      Fish: "Mahi-mahi",
      Location: 5,
      ShadowType: 3,
      Value: 6000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
      Fish: "Mitten Crab",
      Location: 2,
      ShadowType: 1,
      Value: 2000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      SouthMonths: [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0]
    },
    {
      Fish: "Moray Eel",
      Location: 5,
      ShadowType: 7,
      Value: 2000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      SouthMonths: [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      Fish: "Napoleonfish",
      Location: 5,
      ShadowType: 5,
      Value: 10000,
      StartTime: 4,
      EndTime: 21,
      NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      SouthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      Fish: "Neon Tetra",
      Location: 2,
      ShadowType: 0,
      Value: 500,
      StartTime: 9,
      EndTime: 16,
      NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
    },
    {
      Fish: "Nibble Fish",
      Location: 2,
      ShadowType: 1,
      Value: 1500,
      StartTime: 9,
      EndTime: 16,
      NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
      Fish: "Oarfish",
      Location: 5,
      ShadowType: 5,
      Value: 9000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
      SouthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
    },
    {
      Fish: "Ocean Sunfish",
      Location: 5,
      ShadowType: 6,
      Value: 4000,
      StartTime: 4,
      EndTime: 21,
      NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      Fish: "Olive Flounder",
      Location: 5,
      ShadowType: 3,
      Value: 800,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Pale Chub",
      Location: 2,
      ShadowType: 0,
      Value: 160,
      StartTime: 9,
      EndTime: 16,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Pike",
      Location: 2,
      ShadowType: 4,
      Value: 1800,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      SouthMonths: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1]
    },
    {
      Fish: "Piranha (afternoon)",
      Location: 2,
      ShadowType: 1,
      Value: 2500,
      StartTime: 9,
      EndTime: 16,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Piranha (night)",
      Location: 2,
      ShadowType: 1,
      Value: 2500,
      StartTime: 21,
      EndTime: 4,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Pond Smelt",
      Location: 2,
      ShadowType: 1,
      Value: 500,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      SouthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
    },
    {
      Fish: "Pop-eyed Goldfish",
      Location: 1,
      ShadowType: 0,
      Value: 1300,
      StartTime: 9,
      EndTime: 16,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Puffer Fish",
      Location: 5,
      ShadowType: 2,
      Value: 250,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      Fish: "Rainbowfish",
      Location: 2,
      ShadowType: 1,
      Value: 800,
      StartTime: 9,
      EndTime: 16,
      NorthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
      Fish: "Ranchu Goldfish",
      Location: 1,
      ShadowType: 1,
      Value: 4500,
      StartTime: 9,
      EndTime: 16,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Ray",
      Location: 5,
      ShadowType: 4,
      Value: 3000,
      StartTime: 4,
      EndTime: 21,
      NorthMonths: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
      SouthMonths: [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      Fish: "Red Snapper",
      Location: 5,
      ShadowType: 3,
      Value: 3000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Ribbon Eel",
      Location: 5,
      ShadowType: 7,
      Value: 600,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Saddled Bichir",
      Location: 2,
      ShadowType: 3,
      Value: 4000,
      StartTime: 21,
      EndTime: 4,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Salmon",
      Location: 4,
      ShadowType: 1,
      Value: 700,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      SouthMonths: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      Fish: "Saw Shark",
      Location: 5,
      ShadowType: 6,
      Value: 12000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Sea Bass",
      Location: 5,
      ShadowType: 4,
      Value: 400,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      SouthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Sea Butterfly",
      Location: 5,
      ShadowType: 0,
      Value: 1000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      SouthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
    },
    {
      Fish: "Sea Horse",
      Location: 5,
      ShadowType: 0,
      Value: 1100,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
    },
    {
      Fish: "Snapping Turtle",
      Location: 2,
      ShadowType: 4,
      Value: 5000,
      StartTime: 21,
      EndTime: 4,
      NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
      Fish: "Soft-shelled Turtle",
      Location: 2,
      ShadowType: 3,
      Value: 3750,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      SouthMonths: [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      Fish: "Squid",
      Location: 5,
      ShadowType: 2,
      Value: 500,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
      SouthMonths: [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      Fish: "Stringfish",
      Location: 3,
      ShadowType: 5,
      Value: 15000,
      StartTime: 16,
      EndTime: 9,
      NorthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      SouthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
    },
    {
      Fish: "Sturgeon",
      Location: 4,
      ShadowType: 5,
      Value: 10000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      SouthMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    },
    {
      Fish: "Suckerfish",
      Location: 5,
      ShadowType: 6,
      Value: 1500,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Surgeonfish",
      Location: 5,
      ShadowType: 1,
      Value: 1000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
      Fish: "Sweetfish",
      Location: 2,
      ShadowType: 2,
      Value: 900,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      Fish: "Tadpole",
      Location: 1,
      ShadowType: 0,
      Value: 100,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      SouthMonths: [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    },
    {
      Fish: "Tilapia",
      Location: 2,
      ShadowType: 2,
      Value: 800,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      SouthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Tuna",
      Location: 0,
      ShadowType: 4,
      Value: 7000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      SouthMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0]
    },
    {
      Fish: "Whale Shark",
      Location: 5,
      ShadowType: 6,
      Value: 13000,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      SouthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      Fish: "Yellow Perch",
      Location: 2,
      ShadowType: 2,
      Value: 300,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      SouthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    },
    {
      Fish: "Zebra Turkeyfish",
      Location: 5,
      ShadowType: 2,
      Value: 500,
      StartTime: 0,
      EndTime: 0,
      NorthMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      SouthMonths: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
    }
]

date = new Date()
month = date.getMonth()
hour = date.getHours()

var vm = new Vue({
  el: "#app",
  data: {
    bugs: bugs,
    fishes: fish,
    selectedHemisphere: 0,
    search: "",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    currentMonth: month,
    currentHour: hour,
    bugsChecked: true,
    fishChecked: true

  },
  computed: {
    formatSearch: function () {
      return this.search.toLowerCase()
    }
  }
});
