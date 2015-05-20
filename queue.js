var q = new Queue();
console.log(q.size());

q.enqueue("John");
q.enqueue("Jack");

q.enqueue("camila");

console.log(q.size());
console.log(q.isEmpty());
console.log(q.dequeue());


function Queue(){

	var items = [];


	this.enqueue = function(item){
		items.push(item);
	};

	this.dequeue = function(){
		return items.shift();
	},

	this.front = function(){
		return items[0];
	},

	this.isEmpty = function(){
		return items.length == 0;
	},
	
	this.size = function(){
		return items.length;
	}


}
