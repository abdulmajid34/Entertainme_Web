const { ObjectId } = require('bson')
const { getDatabase } = require('../config/mongodb')

class Series {
    static async find() {
        return getDatabase().collection('Series').find().toArray()
    }
    static async findOne(id) {
        return getDatabase().collection('Series').findOne({_id: ObjectId(id)})
    }
    static async create(data) {
        return getDatabase().collection('Series').insertOne(data)
    }
    static async edit(id, data) {
        return getDatabase().collection('Series').updateOne({_id: ObjectId(id)}, { $set: data })
    }
    static async delete(id) {
        return getDatabase().collection('Series').deleteOne({_id: ObjectId(id)})
    }
}

module.exports = Series