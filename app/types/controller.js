import TypeService from './service.js'

class TypeController {
  async create(req, res) {
    try {
      const type = await TypeService.create(req.body, req.files.picture)
      res.json(type);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async getAll(req, res) {
    try {
      const types = await TypeService.getAll();
      res.json(types);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async getOne(req, res) {
    try {
      const type = await TypeService.getOne(req.params.id)
      res.json(type);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async update(req, res) {
    try {
      const updatedType = await TypeService.update(req.body)
      return res.json(updatedType);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const type = await TypeService.delete(req.params.id);
      return res.json(type);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }
}

export default new TypeController();