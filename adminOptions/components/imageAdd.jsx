import React from 'react'
import { DropZone, Label, Box } from '@adminjs/design-system'

const UploadPhoto = (props) => {
    const { property, record, onChange } = props

    const onUpload = (files) => {
        // const newRecord = { ...record }
        // const file = files.length && files[0]

        // onChange({
        //     ...newRecord,
        //     params: {
        //         ...newRecord.params,
        //         [property.name]: file,
        //     }
        // })
        onChange(property.name, files[0])
    }

    return (
        <Box>
            <Label>{property.label}</Label>
            <DropZone onChange={onUpload} />
        </Box>
    )
}

export default UploadPhoto