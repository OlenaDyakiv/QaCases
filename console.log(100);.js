var arr = []
while(arr.length < 20){
    var randomnumber = Math.ceil(Math.random()*100)
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
console.log(arr);


function bubbleSort(arr) {  
    var length = arr.length;
    for (var i = (length - 1); i >= 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (arr[j] < arr[j - 1]) {
                //Swap the numbers
                var tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
        }

   console.log(length);
   return arr; 
   
}

console.log(bubbleSort(arr));

var length = arr.length;
    for (var i = (length - 1); i >= 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (arr[j] < arr[j - 1]) {
                //Swap the numbers
                var tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
        }

   console.log(length);
   return arr; 
   
}
