const { client } = require('../db/mongo');

async function connectToMongoDB() {
    try {
      await client.connect();
      console.log("Conexão estabelecida com o MongoDB");
    } catch (error) {
      console.error("Erro ao conectar ao MongoDB:", error);
      throw error;
    }
  }
  
  async function getAllTracksFromDB() {
    try {
      const databaseName = "oracle";
      const collectionName = "tracks";
  
      const database = client.db(databaseName);
      const collection = database.collection(collectionName);
  
      // Encontrar todos os documentos na coleção
      const tracks = await collection.find({}).toArray();
      return tracks;
    } catch (error) {
      console.error("Erro ao buscar tracks:", error);
      throw error;
    }
  }
  
  async function closeMongoDBConnection() {
    try {
      await client.close();
      console.log("Conexão com o MongoDB fechada");
    } catch (error) {
      console.error("Erro ao fechar conexão com o MongoDB:", error);
      throw error;
    }
  }
  
  module.exports = {
    connectToMongoDB,
    getAllTracksFromDB,
    closeMongoDBConnection
  };
