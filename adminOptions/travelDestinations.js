const uploadFeature = require('@adminjs/upload')



const TravelDestinationsOptions = {
    listProperties: ['name', 'address', 'Images', 'price'],
    properties: {
        createdAt: {
            isVisible: {
                edit: false,
                list: false
            }
        },
        updatedAt: {
            isVisible: {
                edit: false,
                list: false
            }
        },
        images: {
            isVisible: {
                edit: false
            }
        },

    },
    actions: {

    }, parent: {
        name: 'travel',
        icon: 'Eye',
    }
}

const TravelDestinationsFeatures = [
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

module.exports = { TravelDestinationsOptions, TravelDestinationsFeatures }