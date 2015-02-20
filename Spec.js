describe("treeMap", function() {

  it("should not modify the original tree", function(){
    var root1 = new Tree(1);
    var branch2 = root1.addChild(2);
    var branch3 = root1.addChild(3);
    var leaf4 = branch2.addChild(4);
    var root2 = root1.map(function(value) {return value*2;});
    expect(root1.value).to.eql(1);
    expect(root1.children[0].children[0].value).to.eql(4);
  });

  it("should apply callback to all tree nodes", function(){
    var root1 = new Tree(1);
    var branch2 = root1.addChild(2);
    var branch3 = root1.addChild(3);
    var leaf4 = branch2.addChild(4);
    var root2 = root1.map(function(value) {return value*2;});
    expect(root2.value).to.eql(2);
    expect(root2.children[0].children[0].value).to.eql(8);
  });

});

describe("mapInPlace", function() {

  it("should modify the original tree", function(){
    var root1 = new Tree(1);
    var branch2 = root1.addChild(2);
    var branch3 = root1.addChild(3);
    var leaf4 = branch2.addChild(4);
    root1.mapInPlace(function(value) {return value*2;});
    expect(root1.value).to.eql(2);
    expect(root1.children[0].children[0].value).to.eql(8);
  });

  it("should apply callback to all tree nodes", function(){
    var root1 = new Tree(1);
    var branch2 = root1.addChild(2);
    var branch3 = root1.addChild(3);
    var leaf4 = branch2.addChild(4);
    root1.mapInPlace(function(value) {return value*2;});
    expect(root1.value).to.eql(2);
    expect(root1.children[0].children[0].value).to.eql(8);
  });

});

