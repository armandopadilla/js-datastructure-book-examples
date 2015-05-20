var list = new LinkedList();
list.append(15);
list.append(10);
console.log(list.toString());



function LinkedList() {

	var Node = function(element){
		this.element = element;
		this.next = null;
		this.previous = null;
	}

	var length = 0
	var head = null;
	var tail = null;

	this.append = function(element){
		
		var node = new Node(element),
			current;

		//check if the this is the head of the linked list
		if(head === null){
			head = node;
		}
		else {
			current = head;
			
			while(current.next){
				current = current.next;
			}			

			current.next = node;
		}

		length++;
		
		
	};


	this.insert = function(position, element){

		if(position >= 0 && position <=length){

			var node = new Node(element),
				current = head;
				previous,
				index=0;

			if(position === 0){


				if(!head){

					head = node;
					tail = node;
				}
				else{
					node.next = current;
					current.previous = node;
					head = node;
				}

			}else if(position === length){

				current = tail;
				current.next = node;
				node.previous = current;
				tail = node;

			}else {

				while(index++ < position){
					previous = current;
					current = current.next;
				}

				node.next = current;
				previous.next = node;

				current.previous = node;
				node.previous = previous;

			}

			length++;
			return true;

		}else if(){



		}else{
			return false;
		}

	};

	this.removeAt = function(position){
		
		if(position > -1 && position < length){
			
			var current = head,
			previous;
			index = 0;

			if(position === 0){
				head = current.next;
			}
			else{
				while(index++ < position){
					previous = current;
					current = current.next;
				}

				previous.next = current.next;
			}			
			
			length--;

			return current.element;
			
		}
		else{
			return null;
		}

	};

	this.indexOf = function(element){

		var current = head,
			index = -1;

		while(current){
			if(element === current.element){
				return index;
			}

			index++;
			current = current.next;
		}

		return -1;
	}

	this.isEmpty = function(){

		return length === 0;

	};

	this.size = function(){
		return length;
	};

	this.toString = function(){

		var current = head,
			string = '';

		while(current){
			string += current.element;
			current = current.next;
		}

		return string;
	};


	this.print = function(){};
	

}
