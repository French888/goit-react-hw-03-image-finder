import {Component} from 'react'
import style from './Modal.module.css'
export class Modal extends Component(){
state = {

}
render(){
    return(
        <div className={style.Overlay}>
  <div className={style.Modal}>
    <img src="" alt="" />
  </div>
</div>

    )
}
}