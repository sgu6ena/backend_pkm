import mongoose from "mongoose";

const ArealSchema = new mongoose.Schema({
    title: {type: String, required: true},
    picture: {type: String, required: false},
    // hexagons: [{type: mongoose.Schema.Types.ObjectId, ref: "Hexagon"}]
});

const Areal = mongoose.model('Areal', ArealSchema);

export default Areal
