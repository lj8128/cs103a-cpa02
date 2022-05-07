'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var JEntrySchema = Schema( {
  userId: ObjectId,
  entryDate: Date,
  drinkName: String,
  foodPairing: String,
  rating: Number,
  entryNotes: String,
  createdAt: Date,
} );

module.exports = mongoose.model( 'JEntry', JEntrySchema );
