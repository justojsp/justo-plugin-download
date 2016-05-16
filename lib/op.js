//imports
import download from "justo-download";

/**
 * Task operation.
 */
export default function op(params, done) {
  var opts;

  //(1) arguments
  if (params.length === 0) {
    throw new Error("Expected install options.");
  } else if (params.length >= 1) {
    opts = params[0];
  }

  //(2) download
  download(opts.src, opts.dst, done);
}
