const express = require('express');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');

const mongoose = require('mongoose');

const schema = require('./schema/schema');

const app = express();
app.use(cors());

//connect to atlas mongodb
mongoose.connect('mongodb+srv://feroz:feroz@graphql.bosqw.mongodb.net/graphql_db?retryWrites=true&w=majority')
mongoose.connection.once('open',()=>{
    console.log('connected to mongodb')
})
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))



app.listen(4000, ()=>console.log(`Server started at http://localhost:4000`));