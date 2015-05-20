var ValuePair = function(key, value){


    this.key = key;

    this.value = value;

    this.toString = function(){
        return '['+this.key+' - '+this.value+' ]';
    }

    this.put = function(key, value){

        var position = loseloseHashCode(key);

        if(table[position] == undefined){
            table[position] = new LinkedList();
        }

        table[position].append(new ValuePair(key, value));

    };

    this.get = function(key){

        var position = loseloseHasCode(key);

        if(table[position] !== undefined){

            var current = table[position].getHead();

            while(current.next){

                if(current.element.key === key){
                    return current.element.value;
                }

                current = current.next;
            }


            if(current.element.key === key){
                return current.element.value;
            }

        }

        return undefined;

    }


}