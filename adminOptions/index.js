const UserModel = require('../models/userModel')
const userOptions = require('./userOptions')
const CarModel = require('../models/carModel')
const { carOptions, carFeatures } = require('./carOptions')
// const uploadFeature = require('@admin-bro/upload')
const TravelDestinations = require('../models/travelDestinations')
const { TravelDestinationsOptions, TravelDestinationsFeatures } = require('./travelDestinations')
const path = require('path')
const { Schema } = require('mongoose')
const { default: adminjs } = require('adminjs')


module.exports = {
    resources: [
        {
            resource: UserModel, options: userOptions
        },
        {
            resource: CarModel, options: carOptions, features: carFeatures

        },
        {
            resource: TravelDestinations, options: TravelDestinationsOptions, features: TravelDestinationsFeatures

        }
    ],
    dashboard: {
        handler: async (request, response, context) => {
            console.log(request)
            console.log('fuck')
        }
        ,
        component: adminjs.bundle('./components/imageAdd.jsx')
    },
    branding: {
        companyName: 'NAT',
        withMadeWithLove: false,
        logo: '/public/logo.png'
    },

}