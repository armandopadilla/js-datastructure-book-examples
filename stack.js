var stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
stack.push(11);

console.log(stack.peek());
console.log(stack.size());

stack.pop();
stack.pop();
console.log(stack.size());

function Stack(){

	var items = [];

	this.push = function(element){
		items.push(element);
	};

	this.pop = function(){
		items.pop()
	};

	this.peek = function(){
		return items[items.length-1]
	};

	this.isEmpty = function(){
		return items.length == 0;
	};

	this.size = function(){
		return items.length;
	};

	this.clear = function(){
		items = [];
	};

	this.print = function(){
		console.log(items.toString());
	}

}
