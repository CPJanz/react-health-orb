const FAKE_TECH_TREE = [
  {
    id: 0,
    name: "Jab",
    tier: 1,
    column: 1,
    upstream: [],
    downstream: [1, 3]
  },
  {
    id: 1,
    name: "Power Strike",
    tier: 2,
    column: 2,
    upstream: [0],
    downstream: [4]
  },
  {
    id: 2,
    name: "Poison Javelin",
    tier: 2,
    column: 3,
    upstream: [],
    downstream: [4]
  },
  {
    id: 3,
    name: "Impale",
    tier: 3,
    column: 1,
    upstream: [0],
    downstream: [7]
  },
  {
    id: 4,
    name: "Lightning Bolt",
    tier: 3,
    column: 2,
    upstream: [2],
    downstream: [5, 6]
  },
  {
    id: 5,
    name: "Charged Strike",
    tier: 4,
    column: 2,
    upstream: [1, 4],
    downstream: [8]
  },
  {
    id: 6,
    name: "Plague Javalin",
    tier: 4,
    column: 3,
    upstream: [4],
    downstream: [9]
  },
  {
    id: 7,
    name: "Fend",
    tier: 5,
    column: 1,
    upstream: [3],
    downstream: []
  },
  {
    id: 8,
    name: "Lighting Strike",
    tier: 6,
    column: 2,
    upstream: [5],
    downstream: []
  },
  {
    id: 9,
    name: "Lighting Fury",
    tier: 6,
    column: 3,
    upstream: [6],
    downstream: []
  }
];

export default FAKE_TECH_TREE;
