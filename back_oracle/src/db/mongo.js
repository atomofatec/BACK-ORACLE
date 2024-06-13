const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb://0.0.0.0:27017/";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB server");

        const databaseName = "oracle";
        const collectionName = "tracks";

        const database = client.db(databaseName);
        const collection = database.collection(collectionName);

        // Data to insert
        const tracksData = [
            { _id: 1, name: "Cloud Build Track" },
            { _id: 2, name: "Cloud Sell Track" },
            { _id: 3, name: "Cloud Service Track" },
            { _id: 4, name: "License & Hardware Track" }
        ];

        // Insere as linhas na collection
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(tracksData);
            console.log('Documents inserted successfully.');
        } else {
            console.log('Collection already contains documents, no need to insert.');
        }
    } finally {
        console.log("MongoDB client closed.");
    }
}
module.exports = { run, client };
