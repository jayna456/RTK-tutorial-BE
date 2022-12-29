const expresss = require("express");
const {
  createTutorial,
  readTutorial,
  updateTutorial,
  deleteTutorial,
  searchByTitle,
} = require("../controllers/tutorial.controller");

const router = expresss.Router();

router.post("/", createTutorial);
router.get("/", readTutorial);
router.put("/:id", updateTutorial);
router.delete("/:id", deleteTutorial);
router.get("/:text", searchByTitle);

module.exports = router;
