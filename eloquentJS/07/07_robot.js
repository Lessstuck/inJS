var roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

var roadGraph = buildGraph(roads);

var VillageState = class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) { // if there's a road including here & there, then go there
      console.log("AAAAAAA")
      return this;
    } else {
      let parcels = this.parcels.map(p => { // for each parcel
        if (p.place != this.place) return p; // if parcel location (place) is not robot location (place), include in new parcels
        console.log("BBBBBB");
        return { place: destination, address: p.address }; // the new state will set the parcel's place to the destination, parcel address unchanged
      }).filter(p => p.place != p.address);  // drop off packages, by only copying only ones without this place as the address
      console.log("moved parcels: " + parcels);
      console.log("CCCCCC");
      return new VillageState(destination, parcels);
    }
  }
}

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    console.log("memory: " + memory);
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
<<<<<<< HEAD
      return turn;
=======
>>>>>>> parent of a972bbb... first execise done
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    console.log(state);
    memory = action.memory;
<<<<<<< HEAD
    console.log("statePostAction: " + state);
=======
>>>>>>> parent of a972bbb... first execise done
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 4) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

var mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) { // each time findRoute is called, review contents of work
    let { at, route } = work[i]; // pick an object in work, and name its elements "at" and "route"
    for (let place of graph[at]) { // look at all places from graph location "at"  (?)
      if (place == to) return route.concat(place);  // place is end of route, return route
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});  // add place to route
      }
    }
  }
}

function findRoute2(graph, state) {
  let parcelRouteNearest = findRoute(graph, state.place, state.parcels[0].address);
  // console.log(parcelRouteNearest);
  for (let i = 1; i < state.parcels.length; i++) {
    route = findRoute(graph, state.place, state.parcels[i].address);
    // console.log(route);
    if (route.length < parcelRouteNearest.length) {
      parcelRouteNearest = route;
      // console.log(route);
    } 
  }
  console.log(parcelRouteNearest);
  console.log("\n");
  return parcelRouteNearest;
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];  // pick a parcel, any parcel
    if (parcel.place != place) {  // if parcel is not located at robot location,
      route = findRoute(roadGraph, place, parcel.place);  // find route from robot location to parcel location - pick up
    } else {
      route = findRoute(roadGraph, place, parcel.address); // otherwise, find route from robot location to parcel destination - deliver
    }
  }
  return {direction: route[0], memory: route.slice(1)};  // done. ready for next parcel
}

<<<<<<< HEAD
function goalOrientedRobot2({ place, parcels }, route) {
  let state = { place, parcels };
  if (route.length == 0) {
    route = findRoute2(roadGraph, state);
    let thang = 1;
  }
  console.log("route: " + route);
  return { direction: route[0], memory: route.slice(1) };  // take first step in route
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let state = VillageState.random();
  let robot1Count = 0;
  // for (let i = 0; i < 1000; i++) {
  //   robot1Count += runRobot(state, goalOrientedRobot, memory1);
  // }
  // robot1Count /= 1000;

  let robot2Count = 0;
  // for (let i = 0; i < 1000; i++) {
    robot2Count += runRobot(state, goalOrientedRobot2, memory2);
  // }
  // robot2Count /= 1000;

  console.log("goalOrientedRobot: " + robot1Count + " goalOrientedRobot2: " + robot2Count);
=======
function compareRobots(robot1, memory1, robot2, memory2) {
  // Your code here
>>>>>>> parent of a972bbb... first execise done
}
compareRobots(goalOrientedRobot, [], goalOrientedRobot2, []);
