const AdminJS = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')
const AdminJSOptions = require('./adminOptions')
const BuildRouter = require('./adminRouter')
const mongoose = require('mongoose')
const express = require('express')
const app = express()


AdminJS.registerAdapter(AdminJSMongoose)

const run = async () => {
    await mongoose.connect('mongodb+srv://amrit:natpass@cluster0.hwyb1.mongodb.net/?retryWrites=true&w=majority')
    app.use('/public', express.static('public'));
    const adminJs = new AdminJS(AdminJSOptions)
    adminJs.watch()
    const router = BuildRouter(adminJs)
    app.use(adminJs.options.rootPath, router)

    app.listen(process.env.PORT || 3000, () => console.log('AdminJS is under localhost:8080/admin'))
}

run()