function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);

    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }

    return result;
}

function random_font_awesome() {
    var main = document.getElementById("grid-container");
    var icons = main.querySelectorAll("div > section > a > i");

    var iconarr = Array('buromobelexperte', 'cloudversify', 'forumbee', 'digital-ocean', 'gitter', 'github', 'accusoft', 'affiliatetheme', 'artstation', 'battle-net', 'confluence', 'd-and-d', 'grunt', 'linux', 'phoenix-framework', 'phoenix-squadron', 'suse', 'redhat', 'android', 'blackberry', 'docker', 'gitkraken', 'java', 'laravel', 'mandalorian', 'pied-piper-alt', 'raspberry-pi', 'skyatlas', 'themeisle', 'tripadvisor');
    var newicons = getRandom(iconarr, icons.length);

    for (var i = 0; i < icons.length; i++) {
        icons[i].setAttribute("class", "fab fa-" + newicons[i]);
    }
}

window.onload = function () {
    random_font_awesome();
}