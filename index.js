function produceDrivingRange(blockRange) {
  return function (startingBlock, endingBlock) {
    let start =
    let end =
    let distance = end - start;
    let difference = distance - blockRange;

    if (difference > 0) {
      return `${Math.abs(difference)} blocks out of range`
    } else {
      return `within range by ${Math.abs(difference)}`
    }
  }
}
