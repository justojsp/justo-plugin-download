"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 





op;var _justoDownload = require("justo-download");var _justoDownload2 = _interopRequireDefault(_justoDownload);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params, done) {
  var opts;


  if (params.length === 0) {
    throw new Error("Expected install options.");} else 
  if (params.length >= 1) {
    opts = params[0];}



  (0, _justoDownload2.default)(opts.src, opts.dst, done);}