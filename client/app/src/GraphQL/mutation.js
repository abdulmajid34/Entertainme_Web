import { gql } from '@apollo/client'

export const ADD_MOVIES = gql `
mutation createMovie($input: MovieInput) {
    addMovie(newData: $input) {
        title
        overview
        poster_path
        popularity
        tags
    }
}
`