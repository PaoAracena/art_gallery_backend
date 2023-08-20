const express = require("express");
const paintings = express.Router();
const {
    getAllPaintings,
    createPainting,
    getPainting,
    deletePainting,
    updatePainting,
} = require("../queries/paintings");
// const {checkName} = require ("../")

//INDEX
paintings
.get("/", async (req, res) => {
    const allPaintingd = await getAllPaintingd();
    if (allPaintingd[0]) {
      res.status(200).json(allPaintingd);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  // SHOW
paintings.get("/:id", async (req, res) => {
    const { id } = req.params;
    const painting= await getPainting(id);
    if (painting) {
      res.json(painting);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
// CREATE
paintings.post("/",async (req, res) => {
    try {
        console.log("this is the post req", req.body)
      const painting = await createPainting(req.body);
      res.json(painting);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });

 //DELETE 
  paintings.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedPainting = await deletePainting(id);
    if (deletedPainting.id) {
      res.status(200).json(deletedPainting);
    } else {
      res.status(404).json("Painting not found");
    }
  });

// UPDATE
paintings.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPainting = await updatePainting(id, req.body);
  res.status(200).json(updatedPainting);
});

module.exports = paintings;