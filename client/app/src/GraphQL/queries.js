import { gql } from '@apollo/client';

export const GET_ALLDATA = gql`
query getData {
    movies {
        _id
        title
        overview
        poster_path
        popularity
        
    }
    series {
        _id
        title
        overview
        poster_path
        popularity
        
    }
}
`

export const GET_DETAIL = gql`
query getDetail($input: ID) {
    movie(_id: $input) {
        _id
        title
        overview
        poster_path
        popularity
        tags
    }
}
`