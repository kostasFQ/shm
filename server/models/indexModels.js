const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://kostasFQ:1758236z@ds113871.mlab.com:13871/shm', {useMongoClient: true});


require('./shopModel.js');
