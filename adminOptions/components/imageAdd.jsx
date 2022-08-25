import React, { useEffect } from 'react'
import { DropZone, Label, Box } from '@adminjs/design-system'
import { ApiClient } from 'adminjs'


const UploadPhoto = (props) => {
    useEffect(() => {
        const api = new ApiClient()
        console.log('useeff is running')
        api.resourceAction({ resourceId: 'Car', actionName: 'list' }).then(results => {
            console.log(results)
        }, [])


    })


    return (
        <Box>
            <h1>this is a mighty dashboard, and is customizable</h1>
        </Box>
    )
}

export default UploadPhoto