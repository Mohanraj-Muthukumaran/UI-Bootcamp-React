import { Component } from "react";

class PageElement extends Component{
    
    render(){
        return(
        <this.props.htmlElementName {...this.props.attributes} style={this.props.style}>
            {this.props.innerHTML}
        </this.props.htmlElementName>
        )
    }
}

export default PageElement;