/**
 * EXERCISE 4
 *
 * Angela would like to digitalize all of her experiment data. She keeps the
 * data of each experiment in an object, and all of those objects in an array
 * called 'listOfExperiments'.
 *
 * However, since Angela is quite forgetful, she will sometimes forget to put
 * in all of the necessary data for each experiment, or have typos in the
 * experiment properties.
 *
 * Then, when she wants to search for certain information, her code doesn't work
 * properly!
 *
 * A)
 * Use an ES6 feature to make Angelas code safer. The code
 * should immediately break when she is trying to create an incomplete
 * experiment.
 *
 * B)
 * Using the code you wrote in A), rewrite the declarations of 'experiment1',
 * 'experiment2', and 'experiment3'. Complete missing data by taking a look at
 * the existing code. Angelas test function should work again after you
 * have completed the task.
 *
 * C)
 * Angela is very afraid of accidentally adding the same experiment to
 * 'listOfExperiments' twice. In ES6, there is a new data structure that works
 * a bit similar to an array, but that can assure that the same data is never
 * added twice.
 * Use this new data structure to declare 'listOfExperiments'. After that, you
 * will need to change the function 'getAllExperimentsOnDate' - it should still
 * return an array of experiment names, as it did before.
 *
 * D)
 * Use an ES6 feature so you can define and use the function 'dateFilter' in
 * the same line of code. Do the same for the function 'experimentMapper'.
 */

//---------------helpers & constants

var experiment1 = {
    nmae: "Experiment 1",
    date: "25.02.2023",
    time: "14:20",
    description: "I threw rocks of 5 different weights on my test bike.",
    conclusion: "The rocks that weighed more than 200g left quite a dent.",
  };
  
  var experiment2 = {
    name: "Experiment 2",
    time: "23:18",
    descrpition:
      "I put a chunk of our super secret new bike material into the microwave, to see how long it takes to melt",
    conclusion: "On average, it takes 1.5 minutes to melt.",
  };
  
  var experiment3 = {
    name: "Experiment 3",
    date: "28.02.2023",
    time: "02:11",
    description:
      "I glued three watermelons onto the seat of the test bike to see if they would break when the bike falls over.",
    conclusion: "Two of the three watermelons broke.",
  };
  
  var listOfExperiments = [experiment1, experiment2, experiment3];
  
  //---------------getAllExperimentsOnDate
  function getAllExperimentsOnDate(date) {
    if (typeof date !== "string") {
      return null;
    }
  
    function dateFilter(experiment) {
      return experiment["date"] === date;
    }
  
    var listOfExperimentsOnDate = listOfExperiments.filter(dateFilter);
  
    function experimentNameMapper(experiment) {
      return experiment["name"];
    }
  
    return listOfExperimentsOnDate.map(experimentNameMapper);
  }
  
  function testGetAllExperimentsOnDate() {
    var allExperimentsOn25022023 = getAllExperimentsOnDate("25.02.2023");
  
    /**
     * Weird, why does my code fail here? I KNOW for sure that I did both of
     * those experiments on that exact day!
     */
  
    if (!allExperimentsOn25022023.includes("Experiment 1")) {
      return false;
    }
  
    if (!allExperimentsOn25022023.includes("Experiment 2")) {
      return false;
    }
  
    return true;
  }
  
  if (testGetAllExperimentsOnDate() === false) {
    console.log("The getAllExperimentsOnDate function is wrong.");
  } else {
    console.log("The getAllExperimentsOnDate function works fine!");
  }
  