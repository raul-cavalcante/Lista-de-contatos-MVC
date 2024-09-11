import express from 'express';
import { deleteContactsController, getContactsController, postContactsController } from '../controllers/contatos';

const router = express.Router();

router.post('/contato', postContactsController)
router.get('/contatos', getContactsController)
router.delete('/contato', deleteContactsController)

export default router;
