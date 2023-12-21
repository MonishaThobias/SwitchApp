import React,{Component} from 'react';
import './switch-app.css';

class SwitchApp extends Component{
    constructor(){
        super();
this.state= {
    title: "Switch App",
    initials:"JS",
    buttonText:"Switch Course",
    info:[
    {name:"React Js", description:"User Interface library"},
    {name:"Angular Js", description:"Frontend framework"},
    {name:"Redux", description:"State container for JS apps"},
    
    ] };

this.SwitchFullstack=this.SwitchFullstack.bind(this);
    }

    SwitchFullstack = (newcourse) =>{
        return(
            this.setState(
                {
                    info:[
                        {name:newcourse,description:"Backend library"},
                        {name:"GraphQL",description:"Jquery Language"},
                        {name:"AJAX",description:"Asynchronous Javascript And XML"}
                    ]
                }
            ),
            console.log(newcourse)
        );
    }

    render(){
        const {title,initials,buttonText,info}=this.state;
        return(
            <>
<div className='app-container'>
    <div className='app-head'>
        <h1><span className='initials'>{initials}</span>
        <span className='title'>{title}</span></h1>
    </div>
    <div className='app-body'>
        <ul>
            <li>{info[0].name}
            <p>{info[0].description}</p>
            </li>
            <li>{info[1].name}
            <p>{info[1].description}</p>
            </li>
            <li>{info[2].name}
            <p>{info[2].description}</p>
            </li>
            <li>
                <button onClick={ ()=>this.SwitchFullstack('Node JS') }>{buttonText}</button>
            </li>

        </ul>
    </div>
</div>
            </>
        );
    }
}
 export default SwitchApp;