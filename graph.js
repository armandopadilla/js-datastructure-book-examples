var Dictionary = require('./dictionary');

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for(var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');

console.log(graph.toString());

function Graph(){



    var vertices = [];
    var adjList = new Dictionary();


    this.addVertex = function(v){
        vertices.push(v);
        adjList.set(v, []);
    }

    this.addEdge =  function(v, w){
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.toString = function(){

        var s = '';
        for(var i=0; i<vertices.length; i++){
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);

            for(var j=0; j<neighbors.length; j++){
                s += neighbors[j];
            }
            s += '\n';
        }

        return s;
    }

    this.initializeColor = function(){

        var color = [];
        for(var i=0; i<vertices.length; i++){
            color[vertices[i]] == 'white';
        }

        return color;

    }

    this.bfs = function(v, callback){

        var color = initializeColor(),
            queue = new Queue();

        queue.enqueue(v);

        while(!queue.isEmpty()){

            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';

            for(var i=0; i<neighbors.length; i++){
                var w = neighbors[i];
                if(color[w] === 'white'){
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }

            color[u] = 'black';
            if(callback){
                callback(u);
            }

        }

    }


    this.bfs2 = function(v){

        var color = initializeColor(),
            queue = new Queue(),
            d = [],
            pred = [];

        queue.enqueue(v);

        for(var i=0; i<vertices.length; i++){
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }


        while(!queue.isEmpty()){

            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';

            for(var i=0; i<neighbors.length; i++){
                var w = neighbors[i];
                if(color[w] === 'white'){
                    color[w] = 'grey';
                    d[w] = d[u]+1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }

            color[u] = 'black';
            if(callback){
                callback(u);
            }

        }

    }


}