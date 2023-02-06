import mongoose from "mongoose";

const ArealSchema = new mongoose.Schema({
    title: {type: String, required: true},
    picture: {type: String, required: false},
});

const Areal = mongoose.model('Areal', ArealSchema);

export default Areal
