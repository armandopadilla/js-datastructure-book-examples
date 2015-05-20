var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);

console.log(priorityQueue.size());


function PriorityQueue(){

	var items = [];

	function QueueElement(element, priority){
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority){

		//Create an object to insert.
		var queueElement = new QueueElement(element, priority);

		if(this.isEmpty()){
			items.push(queueElement);
		}else{

			var added = false;
			for(var i=0; i<items.length; i++){
				if(queueElement.priority < items[i].priority){
					items.splice(i, 0, queueElement);
					added = true;
					break;
				}
			}

			if(!added){
				items.push(queueElement);
			}

		}

	}


	this.dequeue = function(){
		return items.shift();
	}

	this.size = function(){
		return items.length;
	}

	this.isEmpty  = function(){
		return items.length == 0;
	}


}
