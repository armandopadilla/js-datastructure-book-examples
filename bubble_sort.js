function createNonSortedArray(size){

    var array = new ArrayList();
    for(var i=size; i>0; i--){
        array.insert(i);
    }

    return array;
}

var array = createNonSortedArray(5);
console.log(array.toString());
array.bubblesort();
console.log(array.toString());

console.log(array.selectionSort());

function ArrayList(){


    var array = [];

    this.insert = function(item){
        array.push(item);
    }

    this.toString = function(){
        return array.join();
    }

    this.bubblesort = function(){
        var length = array.length;

        for(var i=0; i<length; i++){
            for(var j=0; j<length-1; j++){
                if(array[j] > array[j+1]){
                    this.swap(j, j+1);
                }
            }
        }
    }

    this.swap = function(index1, index2){
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    }


    this.modifiedBubbleSort = function(){

        var length = array.length;
        for(var i=0; i<length; i++){
            for(var j=0;  j<length-1-i; j++){
                if(array[j] > array[j+1]){
                    swap(j, j+1);
                }
            }
        }

    };


    this.selectionSort = function(){

        var length = array.length,
            indexMin;

        for(var i=0; i<length-1; i++){
            console.log(array[i]);
            indexMin = i;
            for(var j=i; j<length; j++){
                if(array[indexMin] > array[j]){
                    indexMin = j;
                }
            }

            if(i !== indexMin){
                swap(i, indexMin);
            }
        }

    };

    this.insertionSort = function(){

        var length = array.length,
            j, temp;

        for(var i=1; i<length; i++){

            j=i;
            temp = array[i];
            while(j>0 && array[j-1] > temp){
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;777
        }

    };


    /**
     * Merge sort example
     */
    this.mergeSort = function(){
        array = mergeSortRec(array);
    }




}


