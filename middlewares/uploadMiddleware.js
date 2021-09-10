const multer = require("multer"); 
const path = require("path"); //чтобы прописать пути к папкам

const tempDir = path.join(process.cwd(), "temp");  //путь к временной папке для сохранения аватара

// 1. создаем настройки сохраниения файла
const storageSettings = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 10000,
  },
});

// 2. создаем мидлвару сохранения для обработки(считывания) файла
const uploadMiddleware = multer({
  storage: storageSettings,
});

module.exports = uploadMiddleware;