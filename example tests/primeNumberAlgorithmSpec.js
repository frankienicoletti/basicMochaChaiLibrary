describe("primeTester", function() {

  it("numbers 1-10", function(){
    var testParams = [1,2,3,4,5,6,7,8,9,10];
    var solutions = [false, true, true, false, true, false, true, false, false, false];
    for (var i=0; i<10; i++) {
      var result = primeTester(testParams[i]);
      expect(result).to.eql(solutions[i]);    }
  });

  it("numbers 11-20", function(){
    var testParams = [11,12,13,14,15,16,17,18,19,20];
    var solutions = [true, false, true, false, false, false, true, false, true, false];
    for (var i=0; i<10; i++) {
      var result = primeTester(testParams[i]);
      expect(result).to.eql(solutions[i]);    }
  });

  it("not integers", function(){
    var testParams = [0, -5, 1.25, 29.15675];
    var solutions = [false, false, false, false];
    for (var i=0; i<4; i++) {
      var result = primeTester(testParams[i]);
      expect(result).to.eql(solutions[i]);    }
  });

  it("large number", function(){
    var testParams = [15485867, 239812076741689];
    var solutions = [true, false];
    for (var i=0; i<2; i++) {
      var result = primeTester(testParams[0]);
      expect(result).to.eql(solutions[0]);
    }
  });

  it("sieve test: under 100", function(){
    var solutions = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    var input = 100;
    result = primeSieve(0, input);
    expect(result).to.eql(solutions);
  });

  it("sieve test: 23, 29", function(){
    var solutions = [23,29];
    result = primeSieve(23, 29);
    expect(result).to.eql(solutions);
  });


});
