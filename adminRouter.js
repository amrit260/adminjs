const AdminJSExpress = require('@adminjs/express')
const bcrypt = require('bcrypt')
const MongoStore = require('connect-mongo')

const User = require('./models/userModel')

const AdminRouter = (adminJs) => {
    const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
        authenticate: async (email, password) => {
            const user = await User.findOne({ email })
            if (user) {
                const matched = await bcrypt.compare(password, user.encryptedPassword)
                if (matched) {
                    return user
                }
            }
            return false
        },
        cookiePassword: 'some-secret-password-used-to-secure-cookie',
    }, null, {
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/bro' })
    })
    return router
}

module.exports = AdminRouter