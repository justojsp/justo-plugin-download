//imports
import {simple} from "justo";

//api
module.exports = simple({ns: "org.justojs.plugin", name: "download"}, require("./lib/op").default);
