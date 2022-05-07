'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var userSchema = Schema( {
  username: String,
  passphrase: String,
  age: String,
  fav_drink_type: String
} );

module.exports = mongoose.model( 'User', userSchema );
