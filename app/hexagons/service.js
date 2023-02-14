import Hexagon from "./schema.js";
import FileService from "../fileService.js";

class HexagonService {
  async create(hexagon, picture=null) {
    const fileName = FileService.saveFile(picture);
    const createdHexagon = await Hexagon.create({...hexagon, picture:fileName});
    return createdHexagon;
  }

  async getAll() {
    const hexagons = await Hexagon.find().populate(['areal','themes']);
    return hexagons
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id не указан")
    }
    const hexagon = await Hexagon.findById(id).populate(['areal','themes']);
    return hexagon
  }

  async update(hexagon) {
    if (!hexagon._id) {
      throw new Error("id не указан")
    }
    const updatedHexagon = await Hexagon.findByIdAndUpdate(hexagon._id, hexagon, {new: true})
    return updatedHexagon;
  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан")
    }
    const hexagon = await Hexagon.findByIdAndDelete(id);
    return hexagon
  }
}

export default new HexagonService()