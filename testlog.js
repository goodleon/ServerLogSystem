//引入头文件
var log = require("./log.js");

//错误日志
log.error("this is a error msg");

//普通输出日志
log.info("this is a info msg");

//警告日志
log.warn("this is a warn msg");

//普通没有用日志系统的日志输出
console.log("normal log");