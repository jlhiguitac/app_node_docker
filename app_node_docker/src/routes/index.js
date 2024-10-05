import { Router } from "express";
const router = Router();

router.get('/', (req, res) => res.render("index", {titulo : "Mi primera página Node"}))
router.get('/about', (req, res) => res.render("about", {x : '35'}))
router.get('/contact', (req, res) => res.render("contact"))

export default router