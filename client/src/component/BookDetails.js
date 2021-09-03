import React, { Component } from 'react'
import {graphql} from 'react-apollo'
import {getOneBookQuery} from '../queries/queries';


 class BookDetails extends Component {
    displayBookDetails(){
        const {book} = this.props.data;
        console.log(this.props.data)
        if(book){
            return (
                <div>
                    <h2>Book Name: {book.name}</h2>
                    <p>{book.genre}</p>
                    <p>Author: {book.author.name}</p>
                    <p>All Books by this author:</p>
                    <ol className="other-books">
                        {book.author.books.map(item=>{
                            return <li key={item.id} >{item.name}</li>
                        })}

                    </ol>
                </div>
            )
        }else{
            return (
                <div>No book selected</div>
            )
        }
    }
    render() {
    
        return (
            <div id="book-details">
               <p>{this.displayBookDetails()}</p>

            </div>
        )
    }
}

export default graphql(getOneBookQuery, {
    options:(props)=>{
        return{
            variables:{
                id:props.bookId
            }
        }
    }
}) (BookDetails);