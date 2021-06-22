const { create } = require('../models/movies');
const Movies = require('../models/movies')

class MovieController {
    static async getAll(req, res, next) {
        try {
            let data = await Movies.find()
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
            let data = await Movies.findOne(id)
            res.status(200).json(data)
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async createMovies(req, res, next) {
        try {
            let newData = req.body
            let data = await create(newData)
            // console.log(data, 'INI DATA NYA');
            if(data.insertedCount === 1) {
                res.status(200).json({message: 'successfully added movies', data: data.ops})
            } else {
                throw { name: 'failed create movies' }
            }
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async editMovies(req, res, next) {
        try {
            let id = req.params.id
            let { title, overview, poster_path, popularity, tags } = req.body
            if(title && overview && poster_path && popularity && tags) {
                let editData = { title, overview, poster_path, popularity, tags }
                let result = await Movies.edit(id, editData)
                // console.log(result, 'SETELAH DI EDIT');
                if(result.nModified === 1) {
                    res.status(200).json({ message: 'successfully updated' })
                } else {
                    throw { name: 'failed update your movies' }
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
    static async deleteMovies(req, res, next) {
        try {
            let id = req.params.id
            let data = await Movies.delete(id)
            console.log(data, 'BERHASIL DELETE');
            if(data.deletedCount === 1) {
                res.status(200).json({message: `successfully deleted ${id} in your movies`})
            }
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
}

module.exports = MovieController