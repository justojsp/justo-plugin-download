//imports
const file = require("justo-assert-fs").file;
const Dir = require("justo-fs").Dir;
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-download/lib/op").default;
//suite
suite.only("#op()", function() {
  var DATA, DATA_DIR;

  init("*", function() {
    DATA_DIR = Dir.createTmpDir();
    DATA = DATA_DIR.path;
  });

  fin("*", function() {
    DATA_DIR.remove();
  });

  test("op(config)", function(done) {
    op([{
      src: "http://google.es/index.html",
      dst: DATA
    }], function() {
      file(DATA, "index.html").must.exist();
      done();
    });
  });

  test("op(config)", function(done) {
    op([{
      src: "http://google.es/unknown.html",
      dst: DATA
    }], function() {
      file(DATA, "unknown.html").must.not.exist();
      done();
    });
  });
})();
