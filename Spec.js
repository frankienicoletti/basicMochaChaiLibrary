describe("Data Types, Operators, & Expressions", function() {

  it("should return true", function(){
    expect(answers[0]).to.eql(true);
  });

  it("should return true", function(){
    expect(answers[1]).to.eql(true);
  });

  it("should return true", function(){
    expect(answers[2]).to.eql(true);
  });

  it("should return true", function(){
    expect(answers[3]).to.eql(true);
  });

  it("should return true", function(){
    expect(answers[4]).to.eql(true);
  });

  it("should return true", function(){
    expect(answers[5]).to.eql(true);
  });

  it("should return true", function(){
    expect(answers[6]).to.eql(true);
  });

  it("should return true", function(){
    expect(answers[7]).to.eql(true);
  });

});

describe("Basic Functions", function() {

  it("should add 2 things", function() {
    expect(addition(2, 2)).to.eql(4);
  });

  it("should add 3 things", function() {
    expect(addition(2, 3, 4)).to.eql(9);
  });

  it("should include a conditional statement", function() {
    expect(fun_with_math(2, 2)).to.eql(4);
  });

  it("should do something different with odd numbers", function() {
    expect(fun_with_math(3, 3)).to.eql(9);
  })

});

describe("Higher Order Function", function() {

  it("should multiple numbers in an array", function() {
    var test_array = [1, 2, 3, 4, 5];
    expect(ForEach(test_array, function(item) {
      item = item * 2;
    })).to.eql([2, 4, 6, 8, 10]);
  });

  it("should add y to all the strings", function() {
    var test_array = ['cat', 'bat', 'hat'];
    expect(ForEach(test_array, function(item) {
      item = item + 'y';
    })).to.eql(['caty', 'baty', 'haty']);
  });

});
