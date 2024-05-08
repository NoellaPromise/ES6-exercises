/**
 * EXERCISE 1
 *
 * For Angelas research, it's also important to know how fast a bike could
 * potentially go.
 *
 * The function 'calculateSpeed' takes the starting speed of an object, its
 * acceleration, and the time over which the object is accelerated. It returns
 * the final speed of that object.
 *
 * Angela has written a helper function called 'multiply'. It's at the end of
 * the file.
 *
 * A)
 * So many characters, and three whole lines, just to multiply two numbers?
 * That's too much! Using an ES6 feature, rewrite the 'multiply' function to be
 * much shorter.
 *
 * B)
 * If you did A) correctly, your code should break now. The problem is with the
 * location of the 'multiply' function. Where in this file should the
 * 'multiply' function be placed? Re-locate it to make the code work again.
 */

function calculateSpeed(
    startingSpeedInKmPerHour,
    accelerationInMetersPerSquareSecond,
    timeInSeconds
  ) {
    if (
      typeof startingSpeedInKmPerHour !== "number" ||
      typeof accelerationInMetersPerSquareSecond !== "number" ||
      typeof timeInSeconds !== "number"
    ) {
      return null;
    }
  
    if (
      startingSpeedInKmPerHour < 0 ||
      accelerationInMetersPerSquareSecond < 0 ||
      timeInSeconds < 0
    ) {
      return null;
    }
  
    return (
      startingSpeedInKmPerHour +
      multiply(accelerationInMetersPerSquareSecond, timeInSeconds)
    );
  }
  
  function testCalculateSpeed() {
    if (calculateSpeed("banana", 3, 1) !== null) {
      return false;
    }
  
    if (calculateSpeed(3, -8, 2) !== null) {
      return false;
    }
  
    if (calculateSpeed(3, 3, 3) !== 12) {
      return false;
    }
  
    return true;
  }
  
  if (testCalculateSpeed() === false) {
    console.log("The calculateSpeed function is wrong.");
  } else {
    console.log("The calculateSpeed function works fine!");
  }
  
  function multiply(x, y) {
    return x * y;
  }
  