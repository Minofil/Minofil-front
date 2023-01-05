import express from 'express';
import { ChainHead, ChainBlock, Wallet,GetHeight} from '../controllers/LotusController.js';
const router = express.Router();


router.get("/head", ChainHead)
router.get("/height", GetHeight)

router.get("/block",ChainBlock )

router.get("/getwallet",Wallet )

export default router;