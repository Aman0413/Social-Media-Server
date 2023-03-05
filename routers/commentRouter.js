const router = require("express").Router();
const requireUser = require("../middlewares/requireUser");
const commentController = require("../controllers/commentController");

const {
  createCommentController,
  deleteCommentController,
  getCommentsController,
} = commentController;

router.post("/create", requireUser, createCommentController);
router.delete("/delete", requireUser, deleteCommentController);
router.get("/comments", requireUser, getCommentsController);

module.exports = router;
