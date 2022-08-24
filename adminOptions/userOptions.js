const AdminJs = require('adminjs')
const bcrypt = require('bcrypt')
const { before, after } = require('./uhook')
module.exports = {
    // listProperties: ['name', 'email'],
    properties: {
        name: {
            isVisible: { list: true, filter: true, show: true, edit: true }
        },
        encryptedPassword: {
            isVisible: false
        },
        password: {
            type: 'string'
        },
        birthDate: {
            type: 'richtext'
            // supported types https://docs.adminjs.co/BaseProperty.html#PropertyType
        },
        gender: {
            availableValues: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]
        },

    },
    actions: {
        new: {
            before: async (request) => {
                if (request.payload.password) {
                    request.payload = {
                        ...request.payload,
                        encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                        password: undefined
                    }
                }
                return request
            },

        }, edit: {
            isAccessible: true
        }, show: {
            isAccessible: true
        },
        list: {
            isAccessible: () => true
        }
    },

    branding: {
        companyName: 'Hawa company'
    }
}