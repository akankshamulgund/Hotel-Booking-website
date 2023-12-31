import express from "express";
import { createRoom,updateRoom,deleteRoom,getRoom,getRooms, updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin} from "../utils/verifyTokens.js";

const router=express.Router();


//Create 
router.post("/:hotelid",verifyAdmin ,createRoom);

//update
router.put("/:id",verifyAdmin,updateRoom)

router.put("availability/:id",updateRoomAvailability)

//delete

router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

//get
router.get("/:id",getRoom);

//get all

router.get("/",getRooms);


export default router