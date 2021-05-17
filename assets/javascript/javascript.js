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

function random_note_item() {
    // 目前页面配置了4项，其中1、3、4项是固定的，这里随机的是第二项
    var item2 = document.getElementById("item12");

    var items = Array('Eleventy', 'Gatsby', 'Hugo', 'Pelican', 'VuePress');
    var ranitem = items[Math.floor(Math.random() * items.length)];

    var item_a = item2.querySelector("a");
    item_a.setAttribute("href", "Notes/" + ranitem + "/index.html");
    var item_span = item_a.querySelector("span");
    item_span.textContent = ranitem;
}

window.onload = function () {
    random_note_item();
    random_font_awesome();
}