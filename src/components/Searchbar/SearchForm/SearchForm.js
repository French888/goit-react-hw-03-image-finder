// import { render } from "@testing-library/react"
import { Component } from "react"
import {toast} from 'react-toastify'
// import{InSearch} from "react-icons"

 export class SearchForm extends Component {
    state={
        search:'',
    }

handleSearchChange = e => {
    this.setState({search: e.target.value.toLowerCase()})
}
handleSearchSubmit = e => {
    e.preventDefault();
    if(this.state.search.trim()===''){
        toast('Введите имя покемона')
        return
    }
    this.props.onSubmit(this.state.search)
   this.setState({search:''})
}
    render(){
       return(
       <header className="Searchbar">
       <form className="SearchForm"onSubmit={this.handleSearchSubmit}>
       <button type="submit" className="SearchForm-button">
           {/* <InSearch style={{marginRight:8}}/> */}
         <span className="SearchForm-button-label">Search</span>
       </button>
       
       <input
         onChange={this.handleSearchChange}
         name="search"
         value={this.state.search}
         className="SearchForm-input"
         type="text"
         autocomplete="off"
         autofocus
         placeholder="Search images and photos"
       />
       </form>
       </header>
       )}
         
}
