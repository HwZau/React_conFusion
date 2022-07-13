import React from "react";
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            brand: "Ford",
            color: "red" 
        };

    }
    render() {
        return <h2>I am a {this.state.color} Car!</h2>
    }
}
export default Car;