import React, { Component } from 'react'
import {graphql} from 'react-apollo';
import {flowRight as compose} from 'lodash';
import {getAuthorsQuery, addBookMutation, getBookQuery} from '../queries/queries';

class AddBook extends Component {

    constructor(props){
        super(props);

        this.state = {
            name:'',
            genre:'',
            author_id:''
        }
    }
    displayAuthors(){
        let data = this.props.getAuthorsQuery;
        if(data.loading)
        {
            return(<div>Loading Authors...</div>)
        }
        else{
            return(
                data.authors.map(author=>{
                    return (<option key={author.id} value={author.id}>{author.name}</option>)
                })
            )
        }
    }

    //form handle
    submitForm(e){
        e.preventDefault();
        this.props.addBookMutation({
            variables:{
                name:this.state.name,
                genre:this.state.genre,
                author_id:this.state.author_id
            },
            refetchQueries:[{query:getBookQuery}]
        }); 
        e.target.reset()
    }

    render() {
        return (
            <div>
               <form id='add-book' onSubmit={this.submitForm.bind(this)}>
                   <div className="field">
                       <label>
                           Book name:
                       </label>
                       <input type='text' onChange={(e)=>this.setState({name:e.target.value})} />
                   </div>
                   <div className="field">
                       <label>
                           Genre:
                       </label>
                       <input type='text' onChange={(e)=>this.setState({genre:e.target.value})}/>
                   </div>
                   <div className="field">
                       <label>
                           Author:
                       </label>
                      <select onChange={(e)=>this.setState({author_id:e.target.value})}>
                          <option>Select author</option>
                          {this.displayAuthors()}
                      </select>
                   </div>

                   <button>+</button>

               </form>
            </div>
        )
    }
}

export default compose(
    graphql(getAuthorsQuery, {name:"getAuthorsQuery"}),
    graphql(addBookMutation, {name:"addBookMutation"})
) (AddBook);

// export default graphql(addBookMutation)(graphql(getAuthorsQuery)(AddBook))