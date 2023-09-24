import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import ChildClassA from "./ChildClassA";
import ChildClassB from "./ChildClassB";
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("Parent component Did Mount");
    }

    componentDidUpdate() {
        console.log("Parent component Did Update");
    }

    componentWillUnmount() {
        console.log("Parent component Will Unmount");
    }

    render() {
        console.log("Parent render start");
        return (
            <>
                <h1>About</h1>
                <div className="about-card">
                        <UserClass
                            name="Dipankar (Class Based)"
                            location="Bangalore(Class)"
                        />
                        <UserClass
                            name="Lizu (Class Based)"
                            location="Bhubaneswar(Class)"
                        />
                </div>
                {console.log("inside parend render")}
                <ChildClassA />
                <ChildClassB />
            </>
        );
    }
}

/**
const About_Function = () => {
    return (
        <>
            <h1>About</h1>
            <div className="about-card">
                <div>
                    <User name="Dipankar (Function)" />
                </div>
                <div>
                    <UserClass
                        name="Dipankar (Class Based)"
                        location="Bangalore(Class)"
                    />
                </div>
            </div>
        </>
    );
};
 */
export default About;
