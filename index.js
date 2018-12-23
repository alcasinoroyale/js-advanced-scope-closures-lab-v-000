function produceDrivingRange(blockRange) {
  return function(tripRange) {
    return tripRange * blockRange;
  };
}
