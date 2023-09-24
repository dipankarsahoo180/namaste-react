import React from "react";

export default class ChildClassB extends React.Component {
    constructor(props) {
        super(props);
        console.log("ChildClassB constructor");
    }
    componentDidMount() {
        console.log("ChildClassB component Did Mount");
    }

    render() {
        console.log("ChildClassB render Start");
        return (
            <>
                <h1>Child Class Two</h1>
                {console.log("Inside ChildClassB render")}
            </>
        );
    }
}
