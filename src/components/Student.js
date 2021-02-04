import React, {Component} from 'react';

class Student extends Component{
    constructor(){
        super();
        this.state ={
            score: 0,
            success: false,
            failed: false 
        }
    }
    
    componentDidMount(){
        this.setState(
            {
                 score: this.props.score
            }
        );
    }
    
    subScore(){
        this.setState({
            score: this.state.score -1
        },()=>
        {
            if(this.state.score <=370){
                this.setState({failed:true})
            }
        })
    }
    addScore(){
        this.setState({
            score: this.state.score +1
        },()=>
        {
            if(this.state.score >=555){
                this.setState({success:true})
            }
        })

    }
    
    
    
    render(){

        const isFailed = this.state.failed;
        let text1;
        if(isFailed){
            text1 = <span className="failed">Failed</span>
        }
        else{
            text1 = ''; 
        }
        const isSuccess = this.state.success;
        let text2;
        if(isSuccess){
            text2 = <span className="success">Success</span>
        }
        else{
            text2 = ''; 
        }
        return(
            <div className="student">
                <div className="left">
                    <h2 className ="stdName">{this.props.name}
                    <button className="addScorebtn" onClick={ () => this.addScore()}> + </button>
                    <button className="subscorebtn" onClick={ () => this.subScore()}> - </button>
                    </h2>
                    <p className ="uniName">{this.props.university} {text1}{text2}</p>
                </div> 
                <div className="right">
                    <div class ="score">{this.state.score}</div>
                </div>   
            </div>


        );
    }
}
export default Student;