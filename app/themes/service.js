import Theme from "./schema.js";


class ThemeService {
  async create(theme) {
    const createdTheme = await Theme.create({...theme});
    return createdTheme;
  }

  async getAll() {
    const themes = await Theme.find();
    return themes
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id не указан")
    }
    const theme = await Theme.findById(id);
    return theme
  }

  async update(theme) {
    if (!theme._id) {
      throw new Error("id не указан")
    }
    const updatedTheme = await Theme.findByIdAndUpdate(theme._id, theme, {new: true})
    return updatedTheme;

  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан")
    }
    const theme = await Theme.findByIdAndDelete(id);
    return theme
  }
}

export default new ThemeService()