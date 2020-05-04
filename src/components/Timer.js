import React, { Component } from 'react';
import { UsersContext } from '../Context'
export default class Timer extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            minutes:this.props.minutes,
            seconds:this.props.seconds
        }
    }
    static contextType=UsersContext
    componentDidMount(){
        this.myInterval=setInterval(()=>{
            const {minutes,seconds}=this.state
            if(seconds>0)
            {
                this.setState({
                    seconds:seconds-1
                })
            }
            if(seconds===0){
                if(minutes===0){
                    this.props.stopGameFunc()
                clearInterval(this.myInterval)}
                else{
                    this.setState({
                        minutes:minutes-1
                    })
                }
            }   
        },1000)
    }
  render() {
    return (
      <h4> Time Remaining {this.state.minutes}:{this.state.seconds>9?this.state.seconds:`0${this.state.seconds}`}</h4>
    );
  }
}
