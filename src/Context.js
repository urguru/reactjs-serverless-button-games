import React, { Component } from "react";
import axios from 'axios'
const UsersContext = React.createContext();

class UsersProvider extends Component {
  state = {
    users:[],
    stopGame:false,
    startGame:false,
    score:0,
    user_name:""
  };
  async componentDidMount(){
      console.log("hello")
      try {
          const response = await axios.get('https://1knbmio6pk.execute-api.ap-south-1.amazonaws.com/first/getscores')
          const data=JSON.parse(response.data.body)
          this.setState({
              users:[...data]
          })
      } catch (e) {
          console.log(e)
      }
  }
  updateIntermediateScores=async ()=>{
      try {
          const response = await axios.get('https://1knbmio6pk.execute-api.ap-south-1.amazonaws.com/first/getscores')
          const data = JSON.parse(response.data.body)
          this.setState({
              users: [...data]
          })
      } catch (e) {
          console.log(e)
      }
  }


  //For a particular level
  generateTableData = (level) => {
    const tableData = this.state.users.map((user) => {
      if (user.scores[level] !== undefined) {
        return { user_name: user.user_name, score: user.scores[level] };
      }
    });
    tableData.sort((a, b) => b.score - a.score);
    return tableData;
  };
  //Generate the total scores over all the levels
  generateTotalsTableData = () => {
    const tableData = this.state.users.map((user) => {
      let sum = 0;
      Object.keys(user.scores).forEach((key) => {
        if (typeof user.scores[key] !== "undefined") {
          sum += user.scores[key];
        }
      });
      return { user_name: user.user_name, score: sum };
    });
    return tableData.sort((a,b)=>b.score-a.score);
  };

  generateLevelWiseTableData=()=>{
    let levels=[]
    this.state.users.map((user)=>{
        const keys=Object.keys(user.scores)
        levels=levels.concat(keys);
    })
    levels= new Set(levels)
    levels=[...levels]
    const ans=levels.map((level)=>{
        let maxSoFar=-1
        let user_name=''
        this.state.users.forEach(user=>{
            if(typeof(user.scores[level])!=='undefined')
            {
                if (user.scores[level] > maxSoFar){
                    user_name=user.user_name
                    maxSoFar=user.scores[level]
                }
            }
        })
        return ({user_name,level,score:maxSoFar})
    })
    return ans
}
    startGameFunc=()=>{
        this.setState({
            startGame:true
        })
    }
    stopGameFunc=()=>{
        this.setState({
            stopGame:true
        })
    }
    resetGame=()=>{
        this.setState({
            startGame:false,
            stopGame:false,
            score:0,
            user_name:" "
        })
    }

    updateScore = () => {
        this.startGameFunc();
        if (!this.state.stopGame && this.state.startGame) {
            this.setState({
                score: this.state.score + 1,
            });
        }
    };

    updateUserName=(e)=>{
        this.setState({
            user_name:e.target.value
        })
    }
    updateFinalScore=async (level)=>{
        if(this.state.user_name==="")
        {
            this.resetGame()
            return;
        }
        let user=this.state.users.find((user)=>user.user_name===this.state.user_name)
        if(typeof(user)!=='undefined')
        {
            if(typeof(user.scores[level])==='undefined')
            {
                user.scores[level]=this.state.score
            }
            else{
                if(user.scores[level]<this.state.score)
                {
                    user.scores[level]=this.state.score
                }
            }
        }
        else{
            user={user_name:this.state.user_name,
            scores:{
                [level]:this.state.score
            }}
        }
        try{
            const response1 = await axios.post('https://1knbmio6pk.execute-api.ap-south-1.amazonaws.com/first/createuser',user)
            console.log(response1)
            this.resetGame()
        } catch (e) {
            console.log(e)
            this.resetGame()
        }
        this.updateIntermediateScores()
    }

  render() {
    return (
      <UsersContext.Provider
        value={{
          users: this.state.users,
          stopGame:this.state.stopGame,
          score:this.state.score,
          startGame:this.state.startGame,
          generateTableData: this.generateTableData,
          generateTotalsTableData:this.generateTotalsTableData,
          generateLevelWiseTableData: this.generateLevelWiseTableData,
          startGameFunc:this.startGameFunc,
          stopGameFunc:this.stopGameFunc,
          resetGame:this.resetGame,
          updateScore:this.updateScore,
          user_name:this.state.user_name,
          updateUserName:this.updateUserName,
          updateFinalScore:this.updateFinalScore
        }}
      >
        {this.props.children}
      </UsersContext.Provider>
    );
  }
}

const UsersConsumer = UsersContext.Consumer;

export { UsersConsumer, UsersContext, UsersProvider };
