import HexagonService from './service.js'

class HexagonController {
  async create(req, res) {
    try {
      const hexagon = await HexagonService.create(req.body, req.files.picture)
      res.json(hexagon);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async getAll(req, res) {
    try {
      const hexagons = await HexagonService.getAll();
      res.json(hexagons);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async getOne(req, res) {
    try {
      const hexagon = await HexagonService.getOne(req.params.id)
      res.json(hexagon);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async update(req, res) {
    try {
      const updatedHexagon = await HexagonService.update(req.body)
      return res.json(updatedHexagon);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const hexagon = await HexagonService.delete(req.params.id);
      return res.json(hexagon);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }
}

export default new HexagonController();