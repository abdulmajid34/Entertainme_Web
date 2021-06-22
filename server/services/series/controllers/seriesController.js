const Series = require('../models/series')

class SeriesController {
    static async getAll(req, res, next) {
        try {
            let data = await Series.find()
            res.status(200).json(data)
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async getId(req, res, next) {
        try {
            let id = req.params.id
            let result = await Series.findOne(id)
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async createSeries(req, res, next) {
        try {
            let newData = req.body
            let data = await Series.create(newData)
            if(data.insertedCount === 1) {
                res.status(200).json({message: 'successfully added series', data: data.ops})
            } else {
                throw { name: 'failed create series' }
            }
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async editSeries(req, res, next) {
        try {
            let id = req.params.id
            let { title, overview, poster_path, popularity, tags } = req.body
            if(title && overview && poster_path && popularity && tags) {
                let editData = { title, overview, poster_path, popularity, tags }
                let result = await Series.edit(id, editData)
                if(result.nModified === 1) {
                    res.status(200).json({ message: 'successfully updated' })
                } else {
                    throw { name: 'failed update your series' }
                }
            } else {
                throw { name: 'data is not found' }
            }
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async deleteSeries(req, res, next) {
        try {
            let id = req.params.id
            let data = await Series.delete(id)
            if(data.deletedCount === 1) {
                res.status(200).json({message: `successfully deleted ${id} in your series`})
            }
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
}

module.exports = SeriesController