const UserModel = require('../models/userModel')
const userOptions = require('./userOptions')
const CarModel = require('../models/carModel')
const carOptions = require('./carOptions')
const uploadFeature = require('@adminjs/upload')
const { Schema } = require('mongoose')


module.exports = {
    resources: [{
        resource: UserModel, options: userOptions
    }, {
        resource: CarModel, options: carOptions,
        features: [uploadFeature({
            provider: { local: { bucket: 'public' } },
            properties: {
                key: 'picture.key', // to this db field feature will safe S3 key
                // this property is important because allows to have previews
                filePath: 'picture.filePath',
                file: 'picture.file',
                filename: 'picture.filename',
                filesToDelete: 'picture.filesToDelete',
                bucket: `picture.bucket`,
                mimeType: 'picture.mimeType',

            },
            validation: {
                mimeTypes: ['image/png', 'image/jpeg']
            },
            uploadPath: (record, filename) => {
                return `${filename}`
            },

        }),
        uploadFeature({
            provider: { local: { bucket: 'public' } },
            properties: {
                key: `images.path`, // to this db field feature will safe S3 key
                // this property is important because allows to have previews
                filePath: 'images.filePath',
                file: `Images`,
                filename: `images.filename`,
                filesToDelete: 'images.filestoDelete',
                // bucket: `images.bucket`,
                mimeType: `images.mimeType`,
            }, multiple: true,
            validation: {
                mimeTypes: ['image/png', 'image/jpeg']
            },
            uploadPath: (record, filename) => {
                return `/images/${filename}`
            },

        })
        ]
    }],
    branding: {
        companyName: 'Hawa cmp',
    },

}