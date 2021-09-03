import {gql} from 'apollo-boost';

const getBookQuery =gql`
{
    books{
        name
        id
    }
}
`
const getAuthorsQuery =gql`
{
    authors{
        name
        id
    }
}`

const addBookMutation = gql`

mutation($name:String!, $genre:String!, $author_id:ID!){
    addBook(name:$name, genre:$genre, author_id:$author_id){
        name 
        id
    }
}
`

const getOneBookQuery=gql`
query($id:ID){
    book(id:$id){
        id
        name
        genre
        author{
            id
            name
            age
            books{
                name
                id
            }
        }
    }
}
`
export {getAuthorsQuery, getBookQuery, addBookMutation,getOneBookQuery};