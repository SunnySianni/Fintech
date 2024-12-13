import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  // Dashboard logic
});

router.get('/transactions', (req, res) => {
  // Transaction history logic
});

export default router;