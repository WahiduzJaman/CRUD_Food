const express=require('express')
const FoodController=require('../controller/FoodController')

const router=express.Router();

router.post('/create', FoodController.Create)
router.get('/read', FoodController.Read)
router.get('/readbyid/:id', FoodController.ReadByID)
router.post('/update/:id', FoodController.Update)
router.get('/delete/:id', FoodController.Delete)


module.exports=router;