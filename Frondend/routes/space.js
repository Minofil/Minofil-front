import express from 'express';
import { networkStorageCapacity,StorageState,Rewards,powerStorageProvider,GasUsedforSealing,costOfSealing,costPerSector,messageFee,gasUsed,profits  } from '../controllers/SpaceController.js';
const router = express.Router();

router.get("/network_storage",networkStorageCapacity)
router.get("/storage_state",StorageState)
router.get("/rewards",Rewards)
router.get("/powerstorageprovider",powerStorageProvider)
router.get("/gas_used_for_sealing",GasUsedforSealing)
router.get("/cost_of_sealing",costOfSealing)
router.get("/cost_per_sector",costPerSector)
router.get("/message_fee",messageFee)
router.get("/gas_used",gasUsed)
router.get("/profits",profits)

export default router;