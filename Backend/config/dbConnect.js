const mongoose = require('mongoose');

const dbConnect = () => {
    dbUrl = process.env.MONGODB_URL

    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Database Connected!'))
    .catch((e) => console.log(e.message))
}

module.exports=dbConnect;