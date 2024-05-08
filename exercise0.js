/**
 * EXERCISE 0
 *
 * When Angela was a child, she loved riding her bike. She liked getting on top
 * of a hill with her friends, and going down full speed! She always wondered
 * how strong the force was that pulled her down that hill.
 *
 * Today, Angela is actually researching new materials to build bikes. This
 * means she often has to calculate how much force her materials have to
 * endure, especially when going down hills.
 *
 * The function 'calculateForceOnIncline' takes the mass of an object,
 * the height of an incline the object is at, and the length of that incline,
 * to calculate the force with which the object will be pulled down that
 * incline.
 *
 * A)
 * The variable 'gravityAcceleration' is the acceleration due to the gravity
 * of the earth. It does not need to be changed, ever. Change the declaration of
 * this variable to reflect this to other programmers by using ES6 features.
 *
 * B)
 * It seems like Angela did something that programmers should not do - she
 * reused a variable name. The first time she used the variable 'force', she
 * actually meant gravitational force, and the second time she meant downhill
 * force.
 * Her code did not throw any errors about this, though, so she just overlooked
 * the problem. Use an ES6 style declaration on the two 'force' variables, so
 * that Angelas code throws a syntax error when 'force' is declared a second
 * time.
 *
 * C)
 * Now that you have successfully made Angelas code fail, let's fix it again!
 * Give the two 'force' variables names that better reflect what Angela is
 * calculating.
 *
 * D)
 * Angela uses the 'toFixed' method in her code because she only cares about the
 * integer part of the result. The 'toFixed' method has two downsides, though.
 * It automatically rounds the number up or down, and also it converts the
 * number to a string. She wants neither of this to happen!
 * There is an ES6 feature that can do what she wants.
 * Use that ES6 feature to convert the result of the calculations in
 * 'calculateForceOnIncline' into an integer. It should not be necessary to use
 * the type conversion with 'Number()' anymore.
 */

function calculateForceOnIncline(
    massInKg,
    heightInMeters,
    lengthOfInclineInMeters
  ) {
    if (
      typeof massInKg !== "number" ||
      typeof heightInMeters !== "number" ||
      typeof lengthOfInclineInMeters !== "number"
    ) {
      return null;
    }
  
    if (massInKg < 0 || heightInMeters < 0 || lengthOfInclineInMeters < 0) {
      return null;
    }
  
    var gravityAcceleration = 9.8;
  
    var force = gravityAcceleration * massInKg;
  
    var force = (force * heightInMeters) / lengthOfInclineInMeters;
  
    return Number(force.toFixed(0));
  }
  
  function testCalculateForceOnIncline() {
    if (calculateForceOnIncline(3, "banana", 5) !== null) {
      return false;
    }
  
    if (calculateForceOnIncline(3, -8, 2) !== null) {
      return false;
    }
  
    if (calculateForceOnIncline(3, 3, 3) !== 29) {
      return false;
    }
  
    return true;
  }
  
  if (testCalculateForceOnIncline() === false) {
    console.log("The calculateForceOnIncline function is wrong.");
  } else {
    console.log("The calculateForceOnIncline function works fine!");
  }
  