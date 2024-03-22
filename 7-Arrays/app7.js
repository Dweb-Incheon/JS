[].length;
["a", "b", "c"].length;

a = [1, 2, 3, 4, 5]; // Start with a 5-element array.
a.length = 3; // a is now [1,2,3].
a.length = 0; // Delete all elements.  a is [].
a.length = 5; // Length is 5, but no elements, like new Array(5)
