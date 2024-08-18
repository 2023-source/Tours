import express from 'express'
import {createTour,  getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour, deleteTour} from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router()
// create new Tour
router.post('/',verifyAdmin,createTour);

// update Tour
router.put('/:id',verifyAdmin,updateTour);

// delete Tour
router.delete('/:id',verifyAdmin, deleteTour);

// getSingle Tour
router.get('/getsingleTour/:id', getSingleTour);

// getAll Tour
router.get('/', getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch)

// getTour
router.get("/search/getFeaturedTours", getFeaturedTour)

// getTourCount
router.get("/search/getTourCount", getTourCount)
export default router;