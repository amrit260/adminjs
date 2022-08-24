const AdminJS = require('adminjs')
const { before, after } = require('./uhook')
const validation = {
    mimeTypes: ['image/jpeg', 'image/png'],
}

module.exports = {
    // listProperties: ['id', 'picture', 'Images', 'name],
    properties: {
        ownerId: {
            isVisible: false
        },
        picture: {
            isVisible: false
        },
        mimeType: { isVisible: { delete: false } }



    },
    actions: {
        // new: {
        //     before: before,
        //     after: after
        // },
        edit: {
            isAccessible: ({ currentAdmin, record }) => {

                return currentAdmin && (currentAdmin.role === 'admin' || currentAdmin._id === record.param('ownerId'))
            }
        },
        show: {},
        delete: {

            isAccessible: ({ currentAdmin, record }) => {

                return currentAdmin && (currentAdmin.role === 'admin' || currentAdmin._id === record.param('ownerId'))
            }
        },

    },



}