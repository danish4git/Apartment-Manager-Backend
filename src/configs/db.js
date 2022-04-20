const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://apartment:apartment@cluster0.icdon.mongodb.net/MANAGER"
    // "4500mongodb+srv://danish:apartment@cluster0.bqfug.mongodb.net/MANGER"
  );
};
