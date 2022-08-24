const fs = require('fs')
const path = require('path')



const before = async (request, context) => {

    const currentAdmin = context.currentAdmin
    console.log(context)
    if (request.method === 'post') {
        request.payload = {
            ownerId: currentAdmin._id,
            ...request.payload
        }
        const { uploadImage, ...otherParams } = request.payload
        context.uploadImage = uploadImage
        return {
            ...request, payload: otherParams
        }
    }
    return request
}

const after = async (req, res, context) => {
    const { record, uploadImage } = context

    if (record.isValid() && uploadImage) {
        const filePath = path.join('public', 'images', uploadImage.name)
        // await fs.promises.mkdir(path.dirname(filePath), { recursive: true })
        await fs.promises.rename(uploadImage.path, filePath)
        await record.update({ picture: `${uploadImage.name}` })
    }
    return req
}

module.exports = { before, after }