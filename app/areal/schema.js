import mongoose, {Schema} from "mongoose";
import Hexagon from "../hexagons/schema.js";

const ArealSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  title: {type: String, required: true},
  picture: {type: String, required: false},
  hexagons: [{type: Schema.Types.ObjectId, ref: Hexagon}]
});

const Areal = mongoose.model('Areal', ArealSchema);

export default Areal
