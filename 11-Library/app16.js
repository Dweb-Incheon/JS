function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is not a number!");
  }
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // console.error(e.name);
  // console.error(e.message);
  // console.error(e.toString());
  // Expected output: Error: Parameter is not a number!
}
