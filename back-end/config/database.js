const mongoose = require ('mongoose')

module.export = uri => {
    mongoose.connect(uri)
}

