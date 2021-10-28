import { Component } from "react";
import axios from 'axios';
 import {ImageGallery} from "../../ImageGallery/ImageGallery"
export class Searchbar extends Component{
  state={
    data: null,
    error: null,
    status: 'idle',
  }

componentDidUpdate(prevProp, prevState) {
  const prevName = prevProp.searchName
  const nextName = this.props.searchName

  if(prevName!==nextName){
    let URL=  `https://pixabay.com/api/`
    let API_KEY=`23210508-f6b5f09e6f5a868a1633393ca`
    axios.defaults.baseURL=URL
    let searchQuery = this.props.searchName
    let page = 1
    let per_page = 12
    let param = URL+`?key=${API_KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    console.log(param)
    this.setState({status:'pending'})
    
    fetch(param)
    .then(resp=>{
      if(resp.ok){
       return resp.json()
      }
return `Promise.rejected(
  new Erorr(Нет такого  ${searchQuery})
  )`
    })
    .then((data)=>this.setState( {data, status: 'resolved'}))
    .catch((erorr)=>this.setState({erorr, status: 'rejected'}))
  }
}
  render(){
    const { data, error, status}=this.state      
        if(status==='idle'){
          return(<div>Введите... </div>)
        }
        if (status==='pending') {
         return <div>Загружается...</div> 
        }
        if (status==='rejected') {
          return <h1>{error.message}</h1> 
         }
         if (status==='resolved') {
          return (
          <ImageGallery hits={data}/>
          )}
      
    
  }
}