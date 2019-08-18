document.addEventListener("yt-rendererstamper-finished", function() {
    var currentLocation = window.location.href;
    var videoId = currentLocation.match(/^https:\/\/www\.youtube\.com\/watch\?v=([^&]+)/);
    if (!videoId) {
        return;
    }
    videoId = videoId[1];

    var imgElem = document.getElementById('additional-thumbnail');
    if (!imgElem) {
        var target = document.getElementById("description");
        if (!target) {
            return;
        }

        imgElem = document.createElement('img');
        imgElem.id = 'additional-thumbnail';
        imgElem.onmouseover = function() {
            this.style.cursor='pointer';
        };
        imgElem.onclick = function toggleThumbnailSize() {
            var imgElem = document.getElementById('additional-thumbnail');
            if (imgElem.src.indexOf('hqdefault.jpg')!=-1) {
                imgElem.src = imgElem.src.replace('hqdefault.jpg', 'default.jpg');
            } else {
                imgElem.src = imgElem.src.replace('default.jpg', 'hqdefault.jpg');
            }
        };

        var placeholder = document.createElement('div');
        placeholder.style.display = "inline-block";
        placeholder.appendChild(imgElem);

        target.parentNode.insertBefore(placeholder, target);
    }
    imgElem.src = 'https://i.ytimg.com/vi/' + videoId + '/default.jpg';
});