import express from 'express';
import { getProfile, updateProfile } from '../controllers/profile.js';

const router = express.Router();

// Get a profile by user ID
router.get('/:id', getProfile);

// Update a profile by user ID
router.put('/:id', updateProfile);

export default router;
