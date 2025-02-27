const chai = require('chai');
const assert = chai.assert;

const server = require('../server');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

suite('Functional Tests', function() {
  this.timeout(5000);
  suite('Integration tests with chai-http', function() {
    // #1
    test('Test GET /hello with no name', function(done) {
      chai
        .request(server)
        .get('/hello')
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello Guest');
          done();
        });
    });

    // #2
    test('Test GET /hello with your name', function(done) {
      chai
        .request(server)
        .get('/hello?name=YourName')
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello YourName');
          done();
        });
    });

    // #3
    test('Send {surname: "Colombo"}', function(done) {
      chai
        .request(server)
        .keepOpen()
        .put('/travellers')

        .end(function(err, res) {
          assert.isNotNull();

          done();
        });
    });
    // #4
    test('Send {surname: "da Verrazzano"}', function(done) {
      assert.isNotNull();

      done();
    });
  });
});

const Browser = require('zombie');
const browser = new Browser();

suite('Functional Tests with Zombie.js', function () {
  this.timeout(5000);

  suite('Headless browser', function () {
    test('should have a working "site" property', function (done) {
      browser.visit('http://localhost:3000/', function () {
        assert.isNull(browser.site);
        done();
      });
    });
  });

  // Resto dos testes com Zombie.js
});


  suite('"Famous Italian Explorers" form', function() {
    // #5
    test('Submit the surname "Colombo" in the HTML form', function(done) {
      assert.isNotNull();

      done();
    });
    // #6
    test('Submit the surname "Vespucci" in the HTML form', function(done) {
      assert.isNotNull();

      done();
    });
  });
