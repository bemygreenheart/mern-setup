import express from 'express';
import devBundle from './devBundle';
import path from 'path';
import template from '../template';
import {MongoClient} from 'mongodb';

// All constant values
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSetup';
const CURRENT_WORKING_DIR=process.cwd();
const PORT = process.env.PORT || 3000;


MongoClient.connect(url, (err, db)=>{
    console.log("Connected successfully to mongodb server");
    db.close();
})

const app = express();

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
devBundle.compile(app);

app.get('/', (req, res) =>{
    res.status(200).send(template());
});

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.info(`Server started on port ${PORT}`)
    }
})