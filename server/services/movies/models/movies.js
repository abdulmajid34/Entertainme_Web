const { ObjectId } = require('bson')
const { getDatabase } = require('../config/mongodb')


class Movies {
    static async find() {
        return getDatabase().collection('Movies').find().toArray()
    }
    static async findOne(id) {
        return getDatabase().collection('Movies').findOne({_id: ObjectId(id)})
    }
    static async create(data) {
        return getDatabase().collection('Movies').insertOne(data)
    }
    static async edit(id, data) {
        return getDatabase().collection('Movies').updateOne({_id: ObjectId(id)}, { $set: data})
    }
    static async update(id, result) {
        return getDatabase().collection('Movies').updateOne({_id: ObjectId(id)}, { $set: result })
    }
    static async delete(id) {
        return getDatabase().collection('Movies').deleteOne({_id: ObjectId(id)})
    }
}

module.exports = Movies