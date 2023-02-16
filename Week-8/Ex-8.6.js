let graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
let graph2 = [[1, 2], [3], [3], []];
function allPathsSourceTarget(graph) {
  let target = graph.length - 1;
  let result = [];
  function dfs(src, path) {
    path.push(src);
    if (src === target) {
      result.push(path);
      return;
    }
    for (let neighbor of graph[src]) {
      dfs(neighbor, [...path]);
    }
  }
  dfs(0, []);
  return result;
}

console.log(allPathsSourceTarget(graph));
console.log(allPathsSourceTarget(graph1));
