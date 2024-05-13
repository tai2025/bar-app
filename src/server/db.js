const MongoClient = require("mongodb")

let connectingClient;

const connectClient = async () => {
    if(connectingClient){
        return connectingClient.db("local")    
    }
    const client = new MongoClient("mongodb://localhost:27017")
    await client.connect()
    await client.db("local").command({ping : 1})
    console.info("Connected to MongoDB")
    connectingClient = client

    return connectingClient.db("local")
}

const stopClient = async () => {
    await connectingClient?.close()
}