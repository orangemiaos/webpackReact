const MongoClient = require("mongodb").MongoClient;
import config from "./config";
const assert = require("assert");

class Db {
  static getInstance() {
    if (!Db.instance) {
      Db.instance = new Db();
    }
    return Db.instance;
  }

  constructor() {
    this.dbClint = "";
  }
  connect() {
    return new Promise((resolve, reject) => {
      if (this.dbClint) {
        return resolve(this.dbClint);
      }
      const client = new MongoClient(config.dbUrl);
      client.connect((err) => {
        if (err) {
          reject(err);
        }
        const db = client.db(config.dbName);
        this.dbClint = db;
        resolve(this.dbClint);
      });
    });
  }
  find(json) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        const collection = db.collection("documents");
        collection.find(json).toArray((err, docs) => {
          if (err) {
            return reject(err);
          }
          resolve(docs);
        });
      });
    });
  }
  update() {}
}

export default Db.getInstance();

// let myDb = Db.getInstance();
// myDb.find('user',{}).then(data){

// }
