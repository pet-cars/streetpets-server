import mongoose from "mongoose";

// const MONGODB_URI =
//   "mongodb+srv://rafaellima:S0scd34mCtgtleiP@clusterstreet.sfdd0wh.mongodb.net/?retryWrites=true&w=majority";

// const connectDB = async (): Promise<void> => {
//   try {
//     await mongoose.connect(MONGODB_URI);

//     console.log("Conexão MongoDB estabelecida com sucesso");
//   } catch (error) {
//     console.error(`Erro ao conectar ao MongoDB: ${error}`);
//     process.exit(1);
//   }
// };
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://rafaellima:S0scd34mCtgtleiP@clusterstreet.sfdd0wh.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server    (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// export default connectDB;
