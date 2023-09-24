import React from "react";

export default class ChildClassA extends React.Component {
    constructor(props) {
        super(props);
        console.log("ChildClassA constructor");
    }
    componentDidMount() {
        console.log("ChildClassA component Did Mount");
    }

    render() {
        console.log("ChildClassA render Start");
        return (
            <>
                <h1>Child Class One</h1>
                {console.log("Inside ChildClassA render")}
            </>
        );
    }
}
