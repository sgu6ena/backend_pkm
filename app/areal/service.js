import Areal from "./schema.js";
import FileService from "../fileService.js";

class ArealService {
  async create(areal, picture) {
    const fileName = FileService.saveFile(picture);
    const createdAreal = await Areal.create({...areal, picture: fileName});
    return createdAreal;
  }

  async getAll() {
    const areals = await Areal.find().populate({
      path: 'hexagons',
      model: 'Hexagon',
      strictPopulate:false
    }).exec();
    return areals
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id не указан")
    }
    const areal = await Areal.findById(id).populate( 'hexagons').exec();

    return areal
  }

  async update(areal) {
    if (!areal._id) {
      throw new Error("id не указан")
    }
    const updatedAreal = await Areal.findByIdAndUpdate(areal._id, areal, {new: true})
    return updatedAreal;

  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан")
    }
    const areal = await Areal.findByIdAndDelete(id);
    return areal
  }
}

export default new ArealService()