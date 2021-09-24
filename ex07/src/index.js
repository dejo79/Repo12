var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Litle Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [ ]
    },
    5439: {
        album: "ABBA Gold"
    }
};

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
    if (prop !=="tracks" && value !== "") {
        collection[id][prop] = value;
    } else if (prop === "tracks" && value !=="") {
        var check = collection[id].hasOwnProperty("tracks");
        if (check === false) {
            collection[id].tracks = [];
            collection[id][prop].push(value);
        } else if (check === true) {
            collection[id][prop].push(value);
        }
    }
    else if (value === "") {
        delete collection[id][prop];
    }
    return object;
}
console.log(updateRecords(collection, 5439, "artist", "ABBA"));
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(collection, 2548, "artist", ""));
console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));
module.exports = updateRecords;