import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
   saveFile(file) {
    try {
      if (file) {
        const fileName = uuid.v4() + '.jpg';
        const filePath = path.resolve('static', fileName);
         file.mv(filePath)
        return fileName
      } else {
        return ''
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export default new FileService();