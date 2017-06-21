var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
    "answer": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "diffLevel": {
            "type": "string"
        },
        "explanation": {
            "type": "string"
        },
        "options": {
            "properties": {
                "a": {
                    "type": "string"
                },
                "b": {
                    "type": "string"
                },
                "c": {
                    "type": "string"
                },
                "d": {
                    "type": "string"
                }
            },
            "type": "object"
        },
        "title": {
            "type": "string"
        },
    created_at: Date,
    updated_at: Date,
    deleted: Boolean
});

questionSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at) {
        this.created_at = currentDate;
        this.deleted = false;
    }

    next();
});

module.exports = mongoose.model('Question', questionSchema);
