import React, {Component} from 'react'
import NewPlaylist from '../components/NewPlaylist'
import axios from 'axios'
export default class NewPlaylistContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            validate:true,
            flag:false
        }
        this.handleChange = this.handleChange.bind(this)  
        this.handleSubmit = this.handleSubmit.bind(this)  
    }   
    handleChange(evt){
        const value = evt.target.value;
        this.setState({
            inputValue:value})
        if(value.length<16 && value.length>0)
        {this.setState({validate:false})
        }else{this.setState({validate:true})
        }
        if(value.length===0)
        {this.setState({flag:true})
        }else{this.setState({flag:false})}
        
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({inputValue:''})
        this.setState({validate:true})
        
        axios.post('/api/playlists',{
            name: this.state.inputValue
        })
        .then(res => res.data)
        .then(result => {
          console.log(result)
        });
   
    }

    render(){
        return (
            <div>
             <NewPlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmit} inputValue={this.state.inputValue} validate={this.state.validate} flag={this.state.flag}/>
            </div>
        )
        }
}