var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var worldPlaces = ['Karachi', 'Chakwal', 'Isalamabad', 'Multan', 'Lahore'];
// printing the original order
console.log(worldPlaces);
//sorting the list in alphabetical order
console.log(__spreadArray([], worldPlaces, true).sort());
//printing the array again
console.log(worldPlaces);
//reversing the array
console.log(worldPlaces.reverse());
//reversing the array again 
console.log(worldPlaces.reverse());
//sorting the array in alphabetical order
console.log(worldPlaces.sort());
//sorting the array in reverse alphabetical order
console.log(worldPlaces.reverse());
