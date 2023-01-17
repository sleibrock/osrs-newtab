// osrs_wallpaperify.js - entrypoint to load OSRS wallpapers on the new tab

// Generate a randomly selected element from an array
// requires Math.random
var randomElement = function(arr) {
    var len = arr.length;
    var random = Math.random();
    var index = Math.trunc(len * random);
    // shouldn't happen, but just in case it does, reset to 0
    if (index == len)
	index = 0;
    return arr[index];
};


var listOfWallpaperPaths = [
    "assets/images/lumbridge.png",
    "assets/images/draynorvillage.png",
    "assets/images/draynormanor.png",
    "assets/images/varrock.png",
    "assets/images/canifis.png",
    //"assets/images/falador.png",
    "assets/images/seersvillage.png",
    //"assets/images/relleka.png",
    //"assets/images/keldagrim.png",
    //"assets/images/something_else.png",
    //"assets/images/something_else.png",
    //"assets/images/something_else.png",
    //"assets/images/something_else.png",
    //"assets/images/something_else.png",
    //"assets/images/something_else.png",
    //"assets/images/something_else.png",
];


var randomWallpaper = function() {
    var rand_e = randomElement(listOfWallpaperPaths);
    var final_path = browser.runtime.getURL(rand_e);
    return 'url(\'' + final_path + '\')';
    return randomElement(listOfWallpaperPaths);
}

// this code will occur now when executed on load
document.body.style.backgroundImage = randomWallpaper();
document.body.style.backgroundSize = "cover";

// end osrs.js
