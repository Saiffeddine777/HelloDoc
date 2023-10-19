import {v4 as uuidv4} from "uuid"
import * as multer from "multer"
import * as  path from "path"


const storageDirectoryPath = path.resolve(__dirname, '..', 'uploads');
 let filePath: string = '';

export const multerConfig = {
      storage: multer.diskStorage({
        destination: storageDirectoryPath,
        filename: (req, file, cb) => {
          const uniqueName: string = uuidv4();  // Generate UUID outside the filename function
          const newName: string = `${uniqueName}${path.extname(file.originalname)}`;
          filePath = path.join(storageDirectoryPath, newName);
          cb(null, newName);
        }
      })
    };

export{filePath}