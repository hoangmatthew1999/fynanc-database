var MongoClient = require('mongodb').MongoClient;

// async function main(){
//     const uri = "mongodb+srv://atlasAdmin:matthewhoang1999@cluster0.vp2i9.mongodb.net/cmpe133?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
//     try{    await client.connect();    await listDatabases(client);}
//     catch(e){console.error(e);}
//     finally{await client.close();}
// }
// main().catch(console.error);

// async function listDatabases(client){
//     const databasesList = await client.db().admin().listDatabases();
//     console.log("Databases");
//     databasesList.databases.forEach(db =>{console.log(db.name);})
// }
const url = "mongodb+srv://atlasAdmin:matthewhoang1999@cluster0.vp2i9.mongodb.net/cmpe133?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cmpe133");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("cmpe133").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }); 