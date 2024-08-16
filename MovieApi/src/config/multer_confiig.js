const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cd){
        cd(null, 'src/imgs')
    },
    filename : function(req , file ,cd){
        const prefix = Date.now() + '-' + Math.round(Math.random() * 100000)
        cd(null,prefix + '-' + file.originalname)
    }
})

const multerConfig = multer({storage:storage})

module.exports = {multerConfig}