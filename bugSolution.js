```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection.updateOne({"_id": 1}, {"$inc": {"field": 1}}); // Correct: increments by a number
```