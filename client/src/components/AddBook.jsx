import React, { useState } from 'react'
import {useQuery} from '@apollo/client';
import {getAuthorsQuery} from '../queries/queries';


const AddBook = () => {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [formData,setFormData]=useState({
        name:'',
        genre:'',
        authorID:'',
    });

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
         ...formData,
         [name]:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);

        setFormData({
            name:'',
            genre:'',
            authorID:'',
        })
    }
   const displayAuthors=()=>{
        if(loading){
            return (<option disabled>loading...</option>);
        } else if (error) {
            return <option disabled>Error loading authors</option>;
          }
        else{
            const authors = data.authors;
            return authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>  ));
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Book name: </label>
                <input type="text" name='name' value={formData.name} onChange={handleInputChange} required/>
            </div>

            <div>
                <label>Genre: </label>
                <input type="text" name='genre' value={formData.genre} onChange={handleInputChange} required/>
            </div>

            <div>
                <label>Author: </label>
                <select name='authorID' value={formData.authorID} onChange={handleInputChange}>
                    <option>Select author</option>
                    {displayAuthors()}
                    </select>

            </div>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddBook