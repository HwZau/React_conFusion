import React from "react";
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            brand: "Ford",
            model: "Mustang",
            color: "red" ,
            year: 1964
        };

    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p></p>
            </div>
        )
    }
}
export default Car;