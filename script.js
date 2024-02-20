window.addEventListener('load', function () {
    var imageInput = document.getElementById('imageInput');
    imageInput.addEventListener('change', function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var panorama = document.getElementById('panorama');
            panorama.innerHTML = '<a-scene><a-sky src="' + e.target.result + '"></a-sky></a-scene>';
        };
        reader.readAsDataURL(file);
    });
});
