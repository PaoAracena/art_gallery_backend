const db = require("../db/dbConfig");

const getAllPaintings = async () => {
    try {
      const allPaintings = await db.any("SELECT * FROM paintings");
      return allPaintings;
    } catch (error) {
      return error;
    }
  };

   // ONE Game
   const getPainting = async (id) => {
    try {
      const onePainting = await db.one("SELECT * FROM paintings WHERE id=$1", id);
      return onePainting;
    } catch (error) {
      return error;
    }
  };

  // CREATE -> POST
const createPainting= async (painting) => {
    try {
        console.log("this is the painting", painting)
      const newPainting = await db.one(
        "INSERT INTO paintings (name, artist_name, painting_year, is_painter_alive, price , country_of_origin,image) VALUES($1, $2, $3, $4, $5,$6,$7) RETURNING *",
        [painting.name, painting.artist_name, painting.painting_year,painting.is_painter_alive, painting.price, painting.country_of_origin, painting.image]
      );
      return newPainting;
    } catch (error) {
      return error;
    }
  };

  //DELETE
 const deletePainting = async (id) => {
    try {
      const deletedPainting = await db.one(
        "DELETE FROM paintings WHERE id = $1 RETURNING *",
        id
      );
      return deletedPainting;
    } catch (error) {
      return error;
    }
  };

  //UPDATE -> PUT
const updatePainting = async (id, painting) => {
    try {
      const updatedPainting = await db.one(
        "UPDATE paintings SET name=$1, artist_name=$2, painting_year=$3, is_painter_alive=$4,price=$5, country_of_origin=$6,image=$7 where id=$8 RETURNING *",
        [painting.name, painting.artist_name, painting.painting_year,painting.is_painter_alive, painting.price, painting.country_of_origin, painting.image,id]
      );
      return updatedPainting;
    } catch (error) {
      return error;
    }
  };

  module.exports = {
    getAllPaintings,
    createPainting,
    getPainting,
    deletePainting,
    updatePainting,
  };