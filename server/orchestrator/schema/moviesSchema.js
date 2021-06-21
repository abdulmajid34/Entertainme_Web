const { gql } = require('apollo-server')
const axios = require('axios')
const baseURL = 'http://localhost:4001';
const Redis = require("ioredis");
const redis = new Redis();

const typeDefs = gql `
    type Movie {
        _id: ID
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }

    input MovieInput {
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }

    input MovieEdit {
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }

    extend type Query {
        movies: [Movie],
        movie(_id: ID): Movie
    }

    extend type Mutation {
        addMovie(newData: MovieInput): Movie,
        editMovies(_id: ID, editData: MovieEdit): Response,
        deleteMovies(movieId: ID): Response
    }
`

const resolvers = {
    Query: {
        movies: () => {
            return redis.get('moviesData')
            .then(data => {
                if(!data) {
                    return axios({
                        method: 'GET',
                        url: baseURL + '/movies'
                    })
                    .then(({ data }) => {
                        redis.set('moviesData', JSON.stringify(data))
                        return data
                    })
                    .catch(err => {
                        console.log(err);
                    })
                } else {
                    return (JSON.parse(data))
                }
            })
        },
        movie: (_, args) => {
            const { _id }  = args;
            return axios({
                method: 'GET',
                url: baseURL + `/movies/${_id}`
            })
            .then(({ data }) => {
                return data
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },
    Mutation: {
        addMovie: (_, args) => {
            let newData = {
                title: args.newData.title,
                overview: args.newData.overview,
                poster_path: args.newData.poster_path,
                popularity: args.newData.popularity,
                tags: args.newData.tags
            };
            return axios({
                method: 'POST',
                url: baseURL + '/movies',
                data: newData
            })
            .then(({ data }) => {
                redis.del('moviesData')
                return data[0]
            })
            .catch((err) => {
                console.log(err);
            })
        },
        editMovies: (_, args) => {
            const _id = args._id
            let editMovie = {
                title: args.editData.title,
                overview: args.editData.overview,
                poster_path: args.editData.poster_path,
                popularity: args.editData.popularity,
                tags: args.editData.tags
            }
            return axios({
                method: 'PUT',
                url: baseURL + `/movies/${_id}`,
                data: editMovie
            })
            .then(({ data }) => {
                redis.del('moviesData')
                return { data: data.message }
            })
            .catch((err) => {
                console.log(err);
            })
        },
        deleteMovies: (_, args) => {
            let movieId = args.movieId
            return axios({
                method: 'DELETE',
                url: baseURL + `/movies/${movieId}`
            })
            .then(({ data }) => {
                redis.del('moviesData')
                return { message: data.message }
            })
        }
    }
}

module.exports = { typeDefs, resolvers }