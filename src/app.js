// const express = require('express');
// const loader = require('./loaders')
import express from 'express';
import config from './config';

async function startServer(){
    const app = express();

    await loader.init({expressApp: app});

    app.listen(process.env.PORT, err => {
        if (err){
            console.log(err);
            return;
        }
        console.log(`Server is started`);
    });
}

startServer();