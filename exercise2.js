/**
 * EXERCISE 2
 *
 * Angela will very often run an experiment three times, just to make sure she
 * is getting correct measurements. She writes down those measurements into
 * arrays.
 *
 * After the experiment is done, she wants to know the average of her three
 * measurements.
 *
 * The function 'calculateAverage' takes an array of numbers and a number of
 * measurements. It returns the average of the numbers in the array.
 *
 * Angela has written a helper function called 'calculateSum'. It's at the end
 * of the file.
 *
 * A)
 * The variable 'numberOfMeasurements' will often have the value 3, because
 * Angela will mostly do 3 runs of her experiment. On days that she has more
 * time, she sometimes does 4 measurements.
 * However, it would be nice to not have to write 3 as a parameter every time
 * she wants to use the function. There is an ES6 feature that enables her to
 * only have to put in a value for 'numberOfMeasurements' when it is not 3.
 * Change the declaration of the function 'calculateAverage' so that Angela
 * does not have to write 3 into the parameters anymore when she is doing 3
 * measurements.
 *
 * B)
 * Angela has already added a test for the functionality of A) in
 * 'testCalculateAverage' - so far, she commented it out, because it didn't
 * work. Remove the comment signs at the beginning of the lines, and check if
 * your code works.
 *
 * C)
 * Use an ES6 feature to shorten the code of the for-loop in a way that the
 * variable 'i' is not needed anymore.
 *
 * D)
 * When 'calculateSumThree' and 'calculateSumFour' is called within
 * 'calculateAverage', it's quite tedious to access every single number in
 * the array. Use an ES6 feature to shorten the parameter list of the call. Only
 * edit the function 'calculateAverage' for this.
 *
 * E)
 * Actually, with ES6, it is not necessary anymore to have two seperate
 * 'calculateSumThree' and 'calculateSumFour' at all!
 * Write a function called 'calculateSum' which can take any amount of
 * parameters, and sums them up. Remove the two old functions, and use your
 * new 'calculateSum' function in the code of 'calculateAverage'.
 * For the sake of this exercise, it is not allowed to just pass an array into
 * 'calculateSum'.
 */

function calculateSumThree(x, y, z) {
    return x + y + z;
  }
  
  function calculateSumFour(w, x, y, z) {
    return w + x + y + z;
  }
  
  function calculateAverage(arrayWithNumbers, numberOfMeasurements) {
    if (!Array.isArray(arrayWithNumbers)) {
      return null;
    }
  
    if (numberOfMeasurements !== 3 && numberOfMeasurements !== 4) {
      return null;
    }
  
    if (arrayWithNumbers.length !== numberOfMeasurements) {
      return null;
    }
  
    for (var i = 0; i < numberOfMeasurements; i++) {
      if (typeof arrayWithNumbers[i] !== "number") {
        return null;
      }
    }
  
    if (numberOfMeasurements === 3) {
      return (
        calculateSumThree(
          arrayWithNumbers[0],
          arrayWithNumbers[1],
          arrayWithNumbers[2]
        ) / 3
      );
    } else {
      return (
        calculateSumFour(
          arrayWithNumbers[0],
          arrayWithNumbers[1],
          arrayWithNumbers[2],
          arrayWithNumbers[3]
        ) / 4
      );
    }
  }
  
  function testCalculateAverage() {
    if (calculateAverage("banana", 3) !== null) {
      return false;
    }
  
    if (calculateAverage([1, -1, 6], "banana") !== null) {
      return false;
    }
  
    if (calculateAverage(["banana", 3, 1], 3) !== null) {
      return false;
    }
  
    if (calculateAverage([1, 2, 3, 1], 3) !== null) {
      return false;
    }
  
    if (calculateAverage([3, 1], 3) !== null) {
      return false;
    }
  
    if (calculateAverage([1, -1, 6], 3) !== 2) {
      return false;
    }
  
    if (calculateAverage([1, -1, 6, 6], 4) !== 3) {
      return false;
    }
  
    /**
     * It would be so cool if I could just do this! But it looks like I can't do
     * it with ES5 ...
     */
    // if (calculateAverage([1, -1, 6]) !== 2) {
    //   return false;
    // }
  
    return true;
  }
  
  if (testCalculateAverage() === false) {
    console.log("The calculateAverage function is wrong.");
  } else {
    console.log("The calculateAverage function works fine!");
  }
  