var jovton = (function (window, jovton, $, undefined) {

    window.onload = function () {
        configureChipDragStart();
        configureBucketDrops();

        function configureChipDragStart() {
            var chip = document.getElementById("chip");

            chip.addEventListener("dragstart", function (e) {
                e.dataTransfer.setData("Text", this.id);
                e.dataTransfer.setData("EightBall", "8 Ball says: " + jovton.get88all());
            });
        }

        function configureBucketDrops() {
            var buckets = document.getElementsByClassName("bucket");

            for (var i = 0; i < buckets.length; i++) {
                var bucket = buckets[i];
                bucket.addEventListener("dragenter", function (e) {
                    bucket.classList.add("over");
                    e.returnValue = false;
                });
                bucket.addEventListener("dragleave", function () {
                    bucket.classList.remove("over");
                });
                bucket.addEventListener("dragover", function (e) {
                    e.returnValue = false;
                });
                bucket.addEventListener("drop", function (e) {
                    var self = this;

                    moveTheChip();
                    displayEightBallMessage();

                    e.dataTransfer.clearData();
                    e.returnValue = false;

                    function moveTheChip() {
                        var chipElementId = e.dataTransfer.getData("Text");
                        var chippy = document.getElementById(chipElementId);
                        chippy.classList.remove("begin");
                        chippy.classList.add("dropped");
                        self.appendChild(chippy);
                    }

                    function displayEightBallMessage() {
                        var eightBallMessage = e.dataTransfer.getData("EightBall");
                        var eightBallBox = document.getElementById("eightBallMessageBox");
                        eightBallBox.innerHTML = eightBallMessage;
                    }
                });
            }
        }
    }

    var eightBallMessages = [
        "It's looking good!",
        "Prepare to strike it lucky!",
        "It's a tough road, but you'll get there!",
        "Lookout! Big and heavy storm clouds ahead!"
    ];

    return {
        get88all: function () {
            var n = new Number(Math.random().toString().substr(2, 1));
            var i = n < 2 ? 0 : n < 5 ? 1 : n < 8 ? 2 : 3;

            return eightBallMessages[i];
        }
    }
})(window, window.jovton = window.jovton || {}, jQuery);