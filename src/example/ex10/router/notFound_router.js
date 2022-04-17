const express = require("express");
const router = express.Router();

router.use((req , res)=>{
    res.status(404).send(req.url +  "  Bu urle edilen isdeke aid seyfe tapilmadi");
});

module.exports = router;