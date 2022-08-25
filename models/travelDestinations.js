const mongoose = require("mongoose");

const TravelDestinationsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        images: {
            type: mongoose.Schema.Types.Mixed
        },

        address: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date
        },

        caption: {
            type: String,
            required: true,
        },

        rating: {
            type: Number,
            default: undefined,
        },
        price: {
            type: String,
            required: true,
        },
        badge: {
            type: String,
            enum: ["POPULAR", "TOP-RATED", "NEW"],
            default: undefined,
        },
    },
    { timestamps: true }
);

const TravelDestinations = mongoose.model("TravelDestinations", TravelDestinationsSchema);

module.exports = TravelDestinations;
