const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});
 const itemModel = mongoose.model("Item", ItemSchema);
module.exports = itemModel
