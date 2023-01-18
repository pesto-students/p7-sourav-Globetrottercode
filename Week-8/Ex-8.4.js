// Find If Path Exists in Graph
edges1 = [
  [0, 1],
  [1, 2],
  [2, 0],
];
edges2 = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];

function checkPath(edges, src, dst) {
  let graph = graphBuilder(edges);
  return hasPath(graph, src, dst, new Set());
}

function hasPath(graph, src, dst, visited) {
  if (src == dst) {
    return true;
  }
  if (visited.has(src)) {
    return false;
  }
  visited.add(src);
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  return false;
}

function graphBuilder(edges) {
  // Creating Adjacency List Graph
  let graph = {};

  for (let edge of edges) {
    let [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

console.log(checkPath(edges1, 0, 2)); // true
console.log(checkPath(edges2, 0, 5)); // false
console.log(graphBuilder(edges1));

let a = [];
let b = [1];
console.log(a.length);
let c = new Array(4).fill(0);
console.log(c);
