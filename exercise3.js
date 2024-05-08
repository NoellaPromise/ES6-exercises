/**
 * EXERCISE 3
 *
 * Angela always forgets where she stored her laboratory devices, and then
 * takes hours to find it. To keep track of things, she decided to write some
 * JavaScript code that manages her stuff for her!
 *
 * All the data is being put into an object called 'labDevices'. The name of a
 * device is the property, and the location of the device is the value.
 *
 * Angela has also written some functions to quickly get and change information
 * on her lab equipment.
 *
 * The function 'changeDeviceLocation' takes the 'labDevices' object, the name
 * of an existing device, and the new location of the device as parameters. It
 * updates the 'labDevices' object, and returns 'success' if it worked.
 *
 * The function 'numberOfDevices' takes the 'labDevices' object and returns the
 * number of lab devices Angela has.
 *
 * The function 'whereIsMy' takes the 'labDevices' object and the name of an
 * existing device. It returns the location of the device.
 *
 * The function 'addDevice' takes the 'labDevices' object, the name of a new
 * device, and the location of the new device. It updates the 'labDevices'
 * object, and returns 'success' if it worked.
 *
 * The function 'deleteDevice' takes the 'labDevices' object and the name of an
 * existing device. It updates the 'labDevices' object, and returns 'success'
 * if it worked.
 *
 * The function 'cleanLaboratory' takes the 'labDevices' object and changes
 * the locations of all devices to 'in the storage closet'. The function returns
 * 'success' if it worked.
 *
 * A)
 * Using an object for doing all those things works, but with ES6, a better
 * data structure was invented! Replace the object with a better data structure.
 *
 * B)
 * After part A), none of Angelas functions work anymore. Rewrite
 * the functions 'changeDeviceLocation', 'numberOfDevices', 'whereIsMy',
 * 'addDevice', 'deleteDevice', and 'cleanLaboratory'.
 *
 * C)
 * Phew, the work never ends - after all we have done in part B) and C), Angelas
 * tests don't work anymore. Rewrite the function 'stringifyLabDevices' so that
 * it can take your new data structure as an input, and return a JSON string.
 * Make sure to write an answer that is 100% compliant with the ES6 standard.
 *
 * D)
 * In some of her tests, Angela used the 'stringContainsSubstring'
 * function to find out if the stringified 'labDevices' object contains the
 * content she expects. She does not care about the actual index of the
 * substrings - she only cares if the string contains a certain substring.
 * ES6 offers feature that makes this check easier. Rewrite the function
 * 'stringContainsSubstring' so that it uses this ES6 feature.
 */

//---------------helpers & constants

var labDevices = {
    pipettes: "in my top right desk drawer",
    gloves: "in my top left desk drawer",
    smallScale: "on the windowsill",
    bigScale: "on the experiment table",
    centrifuge: "under the experiment table",
    thermometer: "hanged up on the wall",
  };
  
  var success = "success";
  
  function stringContainsSubstring(testString, subString) {
    return testString.indexOf(subString) !== -1;
  }
  
  function stringifyLabDevices(labDevices) {
    if (typeof labDevices !== "object") {
      return null;
    }
  
    return JSON.stringify(labDevices);
  }
  
  //---------------changeDeviceLocation
  
  function changeDeviceLocation(labDevices, device, location) {
    if (
      typeof labDevices !== "object" ||
      typeof device !== "string" ||
      typeof location !== "string"
    ) {
      return null;
    }
  
    if (!(device in labDevices)) {
      return null;
    }
  
    labDevices[device] = location;
  
    return success;
  }
  
  function testChangeDeviceLocation() {
    if (changeDeviceLocation(labDevices, "bananas", "in my stomach") !== null) {
      return false;
    }
  
    if (changeDeviceLocation(5, "pipettes", "on the experiment table") !== null) {
      return false;
    }
  
    if (changeDeviceLocation(labDevices, "pipettes", "on my desk") !== success) {
      return false;
    }
  
    var labDevicesString = stringifyLabDevices(labDevices);
  
    if (!stringContainsSubstring(labDevicesString, "gloves")) {
      return false;
    }
  
    if (!stringContainsSubstring(labDevicesString, "on my desk")) {
      return false;
    }
  
    return true;
  }
  
  if (testChangeDeviceLocation() === false) {
    console.log("The changeDeviceLocation function is wrong.");
  } else {
    console.log("The changeDeviceLocation function works fine!");
  }
  
  //---------------numberOfDevices
  
  function numberOfDevices(labDevices) {
    if (typeof labDevices !== "object") {
      return null;
    }
  
    return Object.keys(labDevices).length;
  }
  
  function testNumberOfDevices() {
    if (numberOfDevices("banana") !== null) {
      return false;
    }
  
    if (numberOfDevices(labDevices) !== 6) {
      return false;
    }
  
    return true;
  }
  
  if (testNumberOfDevices() === false) {
    console.log("The numberOfDevices function is wrong.");
  } else {
    console.log("The numberOfDevices function works fine!");
  }
  
  //---------------whereIsMy
  
  function whereIsMy(labDevices, device) {
    if (typeof labDevices !== "object" || typeof device !== "string") {
      return null;
    }
  
    if (!(device in labDevices)) {
      return null;
    }
  
    return labDevices[device];
  }
  
  function testWhereIsMy() {
    if (whereIsMy(3, "pipettes") !== null) {
      return false;
    }
  
    if (whereIsMy(labDevices, 3) !== null) {
      return false;
    }
  
    if (whereIsMy(labDevices, "banana") !== null) {
      return false;
    }
  
    if (whereIsMy(labDevices, "gloves") !== "in my top left desk drawer") {
      return false;
    }
  
    return true;
  }
  
  if (testWhereIsMy() === false) {
    console.log("The whereIsMy function is wrong.");
  } else {
    console.log("The whereIsMy function works fine!");
  }
  
  //---------------addDevice
  
  function addDevice(labDevices, device, location) {
    if (
      typeof labDevices !== "object" ||
      typeof device !== "string" ||
      typeof location !== "string"
    ) {
      return null;
    }
  
    if (device in labDevices) {
      return null;
    }
  
    labDevices[device] = location;
  
    return success;
  }
  
  function testAddDevice() {
    if (addDevice(3, "bananas", "in my lunch box") !== null) {
      return false;
    }
  
    if (addDevice(labDevices, 3, "in my lunch box") !== null) {
      return false;
    }
  
    if (addDevice(labDevices, "bananas", 4) !== null) {
      return false;
    }
  
    if (addDevice(labDevices, "smallScale", 4) !== null) {
      return false;
    }
  
    if (addDevice(labDevices, "microscope", "left of my desk") !== success) {
      return false;
    }
  
    var labDevicesString = stringifyLabDevices(labDevices);
  
    if (!stringContainsSubstring(labDevicesString, "gloves")) {
      return false;
    }
  
    if (!stringContainsSubstring(labDevicesString, "microscope")) {
      return false;
    }
  
    if (!stringContainsSubstring(labDevicesString, "left of my desk")) {
      return false;
    }
  
    return true;
  }
  
  if (testAddDevice() === false) {
    console.log("The addDevice function is wrong.");
  } else {
    console.log("The addDevice function works fine!");
  }
  
  //---------------deleteDevice
  
  function deleteDevice(labDevices, device) {
    if (typeof labDevices !== "object" || typeof device !== "string") {
      return null;
    }
  
    if (!(device in labDevices)) {
      return null;
    }
  
    delete labDevices[device];
  
    return success;
  }
  
  function testDeleteDevice() {
    if (deleteDevice(3, "bigScale") !== null) {
      return false;
    }
  
    if (deleteDevice(labDevices, 3) !== null) {
      return false;
    }
  
    if (deleteDevice(labDevices, "bananas") !== null) {
      return false;
    }
  
    if (deleteDevice(labDevices, "bigScale") !== success) {
      return false;
    }
  
    var labDevicesString = stringifyLabDevices(labDevices);
  
    if (!stringContainsSubstring(labDevicesString, "gloves")) {
      return false;
    }
  
    if (stringContainsSubstring(labDevicesString, "bigScale")) {
      return false;
    }
  
    if (stringContainsSubstring(labDevicesString, "on the experiment table")) {
      return false;
    }
  
    return true;
  }
  
  if (testDeleteDevice() === false) {
    console.log("The deleteDevice function is wrong.");
  } else {
    console.log("The deleteDevice function works fine!");
  }
  
  //---------------cleanLaboratory
  
  function cleanLaboratory(labDevices) {
    if (typeof labDevices !== "object") {
      return null;
    }
  
    for (var property in labDevices) {
      if (labDevices.hasOwnProperty(property)) {
        labDevices[property] = "in the storage closet";
      }
    }
  
    return success;
  }
  
  function testCleanLaboratory() {
    if (cleanLaboratory(3) !== null) {
      return false;
    }
  
    if (cleanLaboratory(labDevices) !== success) {
      return false;
    }
  
    var labDevicesString = stringifyLabDevices(labDevices);
  
    if (stringContainsSubstring(labDevicesString, "on my desk")) {
      return false;
    }
  
    if (stringContainsSubstring(labDevicesString, "in my top left desk drawer")) {
      return false;
    }
  
    if (stringContainsSubstring(labDevicesString, "on the windowsill")) {
      return false;
    }
  
    if (stringContainsSubstring(labDevicesString, "under the experiment table")) {
      return false;
    }
  
    if (stringContainsSubstring(labDevicesString, "hanged up on the wall")) {
      return false;
    }
  
    if (stringContainsSubstring(labDevicesString, "left of my desk")) {
      return false;
    }
  
    if (!stringContainsSubstring(labDevicesString, "gloves")) {
      return false;
    }
  
    if (!stringContainsSubstring(labDevicesString, "in the storage closet")) {
      return false;
    }
  
    return true;
  }
  
  if (testCleanLaboratory() === false) {
    console.log("The cleanLaboratory function is wrong.");
  } else {
    console.log("The cleanLaboratory function works fine!");
  }
  