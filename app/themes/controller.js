import ThemeService from './service.js'

class ThemeController {
  async create(req, res) {
    try {
      const theme = await ThemeService.create(req.body)
      res.json(theme);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async getAll(req, res) {
    try {
      const themes = await ThemeService.getAll();
      res.json(themes);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async getOne(req, res) {
    try {
      const theme = await ThemeService.getOne(req.params.id)
      res.json(theme);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async update(req, res) {
    try {
      const updatedTheme = await ThemeService.update(req.body)
      return res.json(updatedTheme);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const theme = await ThemeService.delete(req.params.id);
      return res.json(theme);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }
}

export default new ThemeController();