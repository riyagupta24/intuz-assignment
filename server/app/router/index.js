import express from "express";
import {products} from './product';

const router = express.Router();

router.get('/products', products)
.get('/health-check', (req, res)=>{
    res.send("Server is running")
});


export default router;