var set = new Set();

set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.add(2);
console.log(set.values());
console.log(set.size());

set.remove(1);
console.log(set.values());

set.remove(2);
console.log(set.values());


//Union example
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

var unionAB = setA.union(setB);
console.log(unionAB.values());



//Intersection example
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

var intersectionSet = setA.intersect(setB);
console.log(intersectionSet.values());



function Set(){

    var items = {};

    this.add = function(value){

        if(!this.has(value)){
            items[value] = value;
            return true;
        }

        return false;

    };

    this.remove = function(value){

        if(this.has(value)){

            delete items[value];
            return true;

        }

        return false;

    };


    /**
     * Check if the value is within the set.
     *
     * @param value
     * @returns {boolean}
     */
    this.has = function(value){

        return items.hasOwnProperty(value);

    };


    /**
     * Clear the set.
     *
     */
    this.clear = function(){
        items = {};
    };


    /**
     * Fetch the size of the set.
     *
     * @returns {Number}
     */
    this.size = function(){

        return Object.keys(items).length;

    };


    /**
     * Fetch all values of the set.
     *
     * @returns {Array}
     */
    this.values = function(){

        return Object.keys(items);

    };


    /**
     * Union.
     *
     * @param otherSet
     * @returns {Set}
     */
    this.union = function(otherSet){


        var unionSet = new Set();

        var values = this.values();
        for(var i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for(var i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }

        return unionSet;

    };


    /**
     * Intersection
     *
     * @param otherSet
     */
    this.intersect = function(otherSet){

        var intersectionSet = new Set();

        var values = this.values();
        for(var i=0; i<values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }

        return intersectionSet;
    }

    this.difference = function(otherSet){

        var differenceSet = new Set();
        var values = this.values();

        for(var i=0; i<values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }


        return differenceSet;
    }

}