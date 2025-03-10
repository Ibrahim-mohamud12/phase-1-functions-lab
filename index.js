function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; // Assume headquarters is at block 42
    return Math.abs(someValue - hqLocation);
  }
  
  function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; // Assume headquarters is at block 42
    return Math.abs(someValue - hqLocation);
  }
  
  function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264; // 1 block = 264 feet
    return distanceFromHqInBlocks(someValue) * feetPerBlock;
  }
  
  function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; // Assume HQ is at block 42
    return Math.abs(someValue - hqLocation);
  }
  
  function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264; // 1 block = 264 feet
    return distanceFromHqInBlocks(someValue) * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // 1 block = 264 feet
    return Math.abs(destination - start) * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // 1 block = 264 feet
    return Math.abs(destination - start) * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free for first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for distance between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Above 2500 feet, not allowed
    }
  }
  