import Type from "./schema.js";
import FileService from "../fileService.js";

class TypeService {
  async create(type, picture) {
    const fileName = FileService.saveFile(picture);
    const createdType = await Type.create({...type, picture:fileName});
    return createdType;
  }

  async getAll() {
    const types = await Type.find();
    return types
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id не указан")
    }
    const type = await Type.findById(id);
    return type
  }

  async update(type) {
    if (!type._id) {
      throw new Error("id не указан")
    }
    const updatedType = await Type.findByIdAndUpdate(type._id, type, {new: true})
    return updatedType;

  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан")
    }
    const type = await Type.findByIdAndDelete(id);
    return type
  }
}

export default new TypeService()