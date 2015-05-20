var hash = new HashTable();
hash.put("Gandalf", "gandarl@email.com");
hash.put("John", "john@email.com");
hash.put("Tyrion", "tyrion@email.com");

console.log(hash.get("Gandalf"));
console.log(hash.get("Loiane"));

function HashTable(){

    var table = [];


    this.put = function(key, value){

        var position = loseloseHashCode(key);
        console.log(position + ' - '+key);
        table[position] = value;

    };

    this.remove = function(key){

        table[loseloseHashCode(key)] = undefined;

    };

    this.get = function(key){

        return table[loseloseHashCode(key)];

    };

    var loseloseHashCode = function(key){

        var hash = 0;
        for(var i = 0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }

        return hash % 37;

    }

}