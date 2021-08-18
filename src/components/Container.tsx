import React, { Component } from 'react';
import {Request} from './request'
import { connect } from "react-redux";
type TStateType = {};

type TPropType = {};


class Container extends Component<TPropType,TStateType> {
    constructor(props: TPropType) { 
        super(props)

        this.state = {
            
        }
      }

      componentDidMount() {
        Request('http://192.168.0.108:3001/api/v1/social-media/juniors/files')
    }
    render() {
      return <p>The current time is</p>
    }
    
  }

  export default connect()(Container) ;