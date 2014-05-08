# PrefixObjectPropertyValues

Iterates object properties while prepending to string values given prefix using transformation function

# api and usage

    var prefix = require("prefixobjpropertyvalues")
    
    var data = {
      propertyA: "path",
      propertyB: ["path", "path/inner"]
    }

    prefix(data, "root", path.join)

    console.log(data.propertyA) // "root/path"
    console.log(data.propertyB) // ["root/path", "root/path/inner"]