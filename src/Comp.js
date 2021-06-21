import react from 'react';
import './App.css';
class Comp extends react.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
        <div className="main">
            <div>
            <div className="heading">
            <h3>{this.props.subject}</h3>
                
            <p>{this.props.content}</p>
            </div>
            </div>
        </div>
        )
    }
} 
export default Comp;
