
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbXX0=
var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed

var foobar = {
  sayHello: function() {
    return 'Hello World!';
  }
};

describe('Foobar', function() {
  describe('#sayHello()', function() {
    it('should work with assert', function() {
      assert.equal(foobar.sayHello(), 'funky chicken!');
    })

    it('should work with expect', function() {
      expect(foobar.sayHello()).to.equal('funky chicken!');
    })

    it('should work with should', function() {
      foobar.sayHello().should.equal('funky chicken!');
    })
  })
})

