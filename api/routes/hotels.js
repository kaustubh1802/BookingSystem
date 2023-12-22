import express from "express";
import {
 createHotel,
 updateHotel,
 deleteHotel,
 getHotel,
 getHotels,
 countByCity,
 countByType,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel);
//update
router.put("/:id", verifyAdmin, updateHotel);
//delete
router.delete("/:id", verifyAdmin, deleteHotel);
//get
router.get("/find/:id", getHotel);
//getall
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
