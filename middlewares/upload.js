const multer = require('multer')
const path = require('path')
// const upload = multer({ dest: 'uploads/' })

const tempDir = path.join(__dirname, '../tmp')
const uploadConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
  limits: { fileSize: 4000 },
})

const upload = multer({ storage: uploadConfig })

module.exports = upload
