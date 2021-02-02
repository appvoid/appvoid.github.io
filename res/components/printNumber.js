var printNumber = function () {
    function doWork() {
        console.log(1 + 1);
    }
    return {
        doWork: doWork
    }
}();