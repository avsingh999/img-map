import React, { Component } from 'react';
import firebase from 'firebase';
import axios from 'axios';
import FileUploader from 'react-firebase-file-uploader';
import MyMap from './leafletreact'
import './style.css'

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            check:false
        };
    }

    onChange(e) {
        this.setState({file:URL.createObjectURL(e.target.files[0]),check:true});
       
    }
    

    render() {
      
     
      console.log(this.state.file)
        return (
          <div>
            <form >
                <h1>Image Upload</h1>
                <input type="file"  ref="fileUploader" name="myImage" onChange= {e=>this.onChange(e)} />
                <img src={this.state.file} id="img1"/>
            </form>
             {
              this.state.check ?
                <MyMap file = {this.state.file}/> : ''
             }
       </div>
        )

        
    }
}

export default ReactUploadImage