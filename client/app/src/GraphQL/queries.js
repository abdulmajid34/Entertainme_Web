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