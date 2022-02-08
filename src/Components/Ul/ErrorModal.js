import React from 'react'
import classes from './ErorrModal.module.css'
import ReactDOM from 'react-dom'


const Modal =(props)=>{
   return <div className={classes.modal}>
            <header className={classes.header}>
                <h2 className={classes.title}>{props.title}</h2>
             </header>
                <footer className={classes.actions}>
                <button className={classes.btn} onClick={props.onConfirm}>OK</button>
                </footer>
                
        </div>
}
const Backdrop =(props)=>(<div onClick={props.onConfirm} className={classes.backdrop}/>)

const ErrorModal = (props) =>{
    return(
        <>
        {ReactDOM.createPortal(
            <Modal title={props.title} onConfirm={props.onConfirm}/>,
            document.getElementById('modal-root')

        )}
        {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm}/>,
            document.getElementById('backdrop-root')

        )}

  
        </>
        
    )
}
export default ErrorModal