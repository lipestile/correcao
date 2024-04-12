const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_MONG_USER}:${process.env.DB_MONG_PWD}@cluster0.ri3p7g6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Banco OK");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;