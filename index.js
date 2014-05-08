module.exports = function(obj, prefix, fn) {
  for(var key in obj) {
    if(!Array.isArray(obj[key]) && typeof obj[key] == "object")
      module.exports(obj[key], prefix, fn)
    else
      if(typeof obj[key] == "string")
        obj[key] = fn(prefix, obj[key])
  }
}