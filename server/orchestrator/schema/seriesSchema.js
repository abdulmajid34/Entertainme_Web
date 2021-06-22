const { gql } = require('apollo-server')
const axios = require('axios')
const baseURL = 'http://localhost:4002'
const Redis = require("ioredis");
const redis = new Redis();

const typeDefs = gql`
    type Series {
        _id: ID
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }

    input DataSeries {
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }

    input DataSeriesEdit {
        _id: ID
        overview: String
        poster_path: String
        popularity: String
        tags: [String]
    }

    extend type Query {
        series: [Series],
        serie(_id: ID): Series
    }

    extend type Mutation {
        createSeries(newData: DataSeries): Series
        editSeries(editData: DataSeriesEdit): Response
        deleteSeries(seriesId: ID): Response
    }
`

const resolvers = {
    Query: {
        series: () => {
            return redis.get('seriesData')
            .then(data => {
                if(!data) {
                    return axios({
                        method: 'GET',
                        url: baseURL + '/series'
                    })
                    .then(({ data }) => {
                        // console.log(data, 'INI DATA SERIES');
                        redis.set('seriesData', JSON.stringify(data))
                        return data
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                } else {
                    return (JSON.parse(data))
                }
            })
        },
        series: (_, args) => {
            const { _id } = args;
            return axios({
                method: 'GET',
                url: baseURL + `/movies/${_id}`
            })
            .then(({ data }) => {
                return data
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    Mutation: {
        createSeries: (_, args) => {
            let newData = {
                title: args.newData.title,
                overview: args.newData.overview,
                poster_path: args.newData.poster_path,
                popularity: args.newData.popularity,
                tags: args.newData.tags
            };
            return axios({
                method: 'POST',
                url: baseURL + '/series',
                data: newData
            })
            .then(({ data }) => {
                redis.del('seriesData')
                console.log(data, 'INI DATA SERIES');
                return data[0]
            })
            .catch((err) => {
                console.log(err);
            })
        },
        editSeries: (_args) => {
            let _id = args.editData.id
            let editSeries = {
                title: args.editSeries.title,
                overview: args.editSeries.overview,
                poster_path: args.editSeries.poster_path,
                popularity: args.editSeries.popularity,
                tags: args.editSeries.tags
            };
            return axios({
                method: 'PUT',
                url: baseURL + `/series/${_id}`,
                data: editSeries
            })
            .then(({ data }) => {
                redis.del('seriesData')
                return data
            })
            .catch((err) => {
                console.log(err);
            })
        },
        deleteSeries: (_, args) => {
            let seriesId = args.seriesId
            return axios({
                method: 'DELETE',
                url: baseURL + `/series/${seriesId}`
            })
            .then(({ data }) => {
                redis.del('seriesData')
                return { message: data.message }
            })
        }
    }
}

module.exports = { typeDefs, resolvers }