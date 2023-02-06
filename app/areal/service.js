import Areal from "./schema.js";
import FileService from "../fileService.js";

class ArealService {
  async create(areal, picture) {
    const fileName = FileService.saveFile(picture);
    const createdAreal = await Areal.create({...areal, picture: fileName});
    return createdAreal;
  }

  async getAll() {
    const areals = await Areal.find();
    const aggregation = await Areal.aggregate([
      {
        $lookup: {
          from: 'hexagons',
          localField: '_id',
          foreignField: 'areal',
          as: 'hexagons'
        }
      },
      // {
      //   $unwind: '$hexagons'
      // },
      // {
      //   $group: {
      //     _id: '$_id',
      //     title: {$first: '$title'},
      //     picture: {$first: '$picture'},
      //     hexagons: {$push: '$hexagons'}
      //   }
      // }
    ]);

    return aggregation
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