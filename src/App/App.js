// import s from "./App.module.css"
import { Component } from "react";

import {SearchForm }from '../components/Searchbar/SearchForm/SearchForm'
import {Searchbar} from '../components/Searchbar/Searchbar/Searchbar'
import{ToastContainer} from 'react-toastify'


export class App  extends Component {
  state={
    search:'',
   
  }
  heandelFormSubmit = search =>{
    this.setState({search})
  }

  render(){
    return (<div>
      
      <SearchForm onSubmit={this.heandelFormSubmit}/>
   <Searchbar searchName={this.state.search}/>
   <ToastContainer autoClose={3000}/>
    </div>)
  }
}
 