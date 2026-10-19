import {Router} from "express";
import pool from "../config/db.js";
const router=Router();
router.get("/",async(_req,res)=>{try{const r=await pool.query("SELECT customer_id, full_name, phone, email FROM customers ORDER BY customer_id DESC");res.json(r.rows);}catch(e){console.error("Fetch customers failed:",e.message);res.status(500).json({message:"Could not fetch customers. Check that the customers table exists."});}});
router.post("/",async(req,res)=>{const {full_name,phone,email}=req.body??{};if(typeof full_name!=="string"||!full_name.trim()||typeof phone!=="string"||!phone.trim()||typeof email!=="string"||!email.trim())return res.status(400).json({message:"Full name, phone and email are required."});try{const r=await pool.query("INSERT INTO customers (full_name, phone, email) VALUES ($1,$2,$3) RETURNING customer_id, full_name, phone, email",[full_name.trim(),phone.trim(),email.trim()]);res.status(201).json(r.rows[0]);}catch(e){console.error("Insert customer failed:",e.message);res.status(500).json({message:"Could not save customer to PostgreSQL."});}});
export default router;
