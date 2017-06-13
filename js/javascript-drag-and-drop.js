(function (window, jovton, $, undefined) {
    var chip = document.getElementById("chip");

    chip.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("Text", this.id);
    });

    var b1 = document.getElementById("bucket2");
    b1.addEventListener("dragenter", function(e) {
        b1.classList.add("over");
        e.returnValue = false;
    });
    b1.addEventListener("dragleave", function() {
        b1.classList.remove("over");
    });
    b1.addEventListener("dragover", function (e) {
        e.returnValue = false;
    });
    b1.addEventListener("drop", function(e) {
        e.returnValue = false;
        var data = event.dataTransfer.getData("Text");
        var d = document.getElementById(data);
        d.classList.remove("begin");
        d.classList.add("dropped");
        this.appendChild(d);
    });
})(window, window.jovton = window.jovton || {});