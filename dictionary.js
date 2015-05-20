/*var dictionary = new Dictionary();
dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "johnson@email.com");
dictionary.set("Tyrion", "tyrion@email.com");

console.log(dictionary.has("Gandalf"));
console.log(dictionary.values());
*/

function Dictionary(){

    var items = {};

    this.set = function(key, value){

        items[key] = value;

    };

    this.remove = function(key){

        if(this.has(key)){
            delete items[key];
            return true;
        };

        return false;
    };

    this.has = function(key){

        return key in items;

    };

    this.get = function(key){

        return this.has(key)? items[key] : undefined;

    };

    this.clear = function(){
        this.items = {};
    };

    this.size = function(){
        this.items.length;
    };


    this.keys = function(){};



    this.values = function(){

        var values = [];

        for(var k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
        }

        return values;

    };


    this.getItems = function(){
        return items;
    }

}

module.exports = Dictionary;