"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 





op;var _download = require("download");var _download2 = _interopRequireDefault(_download);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params, done) {
  var opts;


  if (params.length === 0) {
    throw new Error("Expected install options.");} else 
  if (params.length >= 1) {
    opts = params[0];}



  new _download2.default().get(opts.src, opts.dst).run(done);}