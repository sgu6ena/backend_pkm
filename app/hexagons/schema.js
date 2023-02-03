import mongoose, {Schema} from "mongoose";

const HexagonSchema = new mongoose.Schema({
  title: {type: String, required: true},
  row: {type: String, required: true},
  column: {type: String, required: true},
  areal_id: {type: Schema.Types.ObjectId, ref:"Areal"},
  isCity: {type: Boolean, required: true},
  themes: [{type: Schema.Types.ObjectId, ref:"Theme"}],
  map: {type: String, required: true},
  picture: {type: String, required: false},
});

const Hexagon = mongoose.model('Hexagon', HexagonSchema);

export default Hexagon
