const AdminJS = require('adminjs')
const { before, after } = require('./uhook')
const uploadFeature = require('@adminjs/upload')
const validation = {
    mimeTypes: ['image/jpeg', 'image/png'],
}

const carOptions = {
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
        new: {
            before: before,
            after: after
        },
        edit: {
            isAccessible: ({ currentAdmin, record }) => {

                return currentAdmin && (currentAdmin.role === 'admin' || currentAdmin._id === record.param('ownerId'))
            }
        },
        // list: {
        //     isAccessible: ({ currentAdmin, record }) => {

        //         return currentAdmin && (currentAdmin.role === 'admin' || currentAdmin._id === record.param('ownerId'))
        //     }
        // },
        delete: {

            isAccessible: ({ currentAdmin, record }) => {

                return currentAdmin && (currentAdmin.role === 'admin' || currentAdmin._id === record.param('ownerId'))
            }
        },

    },



}
const carFeatures = [uploadFeature({
    provider: { local: { bucket: 'public' } },
    properties: {
        key: 'picture.key', // to this db field feature will safe S3 key
        // this property is important because allows to have previews
        file: 'upload File',
        bucket: `picture.bucket`,
        mimeType: 'picture.mimeType',

    },
    validation: {
        mimeTypes: ['image/png', 'image/jpeg']
    },
    uploadPath: (record, filename) => {
        // console.log(record)
        return `${filename}`
    },

}),
uploadFeature({
    provider: { local: { bucket: 'public' } },
    properties: {
        key: `images.path`, // to this db field feature will safe S3 key
        // this property is important because allows to have previews
        filePath: 'images.file',
        file: `Images`,
        filesToDelete: 'images.toDelete',
        bucket: `images.bucket`,
        mimeType: `images.mimeType`,
    }, multiple: true,
    validation: {
        mimeTypes: ['image/png', 'image/jpeg']
    },
    uploadPath: (record, filename) => {
        return `${filename}`
    },

})
]

module.exports = { carOptions, carFeatures }