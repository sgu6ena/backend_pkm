import ArealService from './service.js'

class ArealController {
  async create(req, res) {
    try {
      const areal = await ArealService.create(req.body, req.files?.picture||'')
      res.json(areal);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async getAll(req, res) {
    try {
      const areals = await ArealService.getAll();
      res.json(areals);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }
  async getAllWithHexagons(req, res) {
    try {
      const areals = await ArealService.getAllWithHexagons();
      res.json(areals);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }


  async getOne(req, res) {
    try {
      const areal = await ArealService.getOne(req.params.id)
      res.json(areal);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async update(req, res) {
    try {
      const updatedAreal = await ArealService.update(req.body)
      return res.json(updatedAreal);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const areal = await ArealService.delete(req.params.id);
      return res.json(areal);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }
}

export default new ArealController();