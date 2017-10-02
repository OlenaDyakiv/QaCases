var arr = [19, 5, 0, 1, 5, 8, 13, -3, 2];

module.exports =
    function bubbleSort(arr) {
    var length = arr.length;
    for (var i = (length - 1); i >= 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                var tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
    }

    return arr;
    console.log(bubbleSort(arr));
}



