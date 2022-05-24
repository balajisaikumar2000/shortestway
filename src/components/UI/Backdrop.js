import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'
import './Backdrop.css'

function Backdrop(props){
  return <div className="backdrop" onClick={props.onConfirm} />
}

function ErrorBox(props){
  return (
        <Card className="modal">
          <header className="header">
            <h2>{props.title}</h2>
          </header>
          <div className="content">
            <p>{props.message}</p>
          </div>
          <footer className="actions">
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>

  )

}

function ErrorModal(props) {
  return (
    <> 
      { ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}></Backdrop>,document.getElementById('backdrop-port')
      ) }
      { ReactDOM.createPortal(
        <ErrorBox onConfirm={props.onConfirm} title={props.title} message={props.message} ></ErrorBox>, document.getElementById('errorbox-port')
      ) }
    </>
  )
}

export default ErrorModal;
