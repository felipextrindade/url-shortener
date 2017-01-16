const mongoose   = require('mongoose');

/* CREATING MONGOOSE SCHEMAS
 ================================================*/

const redirSchema = new Schema({  
  shortUrl: String,
  url: String,
  createdAt: Date
});

const Redir = mongoose.model('Redir', redirSchema);  