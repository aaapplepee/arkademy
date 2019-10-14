import React, {Component} from 'react'

class Header extends Component {

    render(){
        return(
            <div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default Header;