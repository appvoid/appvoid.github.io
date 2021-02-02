var sayHello = function () {
    function doWork() {
        console.log("Hello world");
    }
    return {
        doWork: doWork
    }
}();