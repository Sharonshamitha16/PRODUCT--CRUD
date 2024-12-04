const Item = require('../models/model')

// Create
const create= async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
   console.log(err.message);
  }
};

// Read
const read= async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Update
 const update =async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
// Delete
 const deleted = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).send("Item deleted");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
module.exports = {create,read,update,deleted}
