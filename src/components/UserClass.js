import React from "react";

export default class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            result: "Pass",
        };
        console.log(this.props.name + " Child constructor");
    }

    async componentDidMount() {
        console.log(this.props.name + " Child component Did Mount");
        const jsonData = await fetch(
            "https://api.github.com/users/dipankarsahoo180"
        ).then((data) => data.json());
        console.warn(jsonData);
        this.setState({
            name: jsonData.name,
            location: jsonData.location,
            avatar_url: jsonData.avatar_url,
        });
        // Create an interval that increments the count state every 1000 milliseconds (1 second)
        this.interval = setInterval(() => {
            console.log('set interval called')
            this.setState((prevState) => ({
                count: prevState.count + 1,
            }));
        }, 5000);
    }

    componentDidUpdate() {
        console.log(this.props.name + " Child component Did Update");
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log(this.props.name + " Child component Will Unmount");
    }

    render() {
        const updateCount = () => {
            this.setState({
                count: ++this.state.count,
                result: "Failed",
            });
        };
        const { name, location, avatar_url, count, result } = this.state;
        console.log(this.props.name + " Child render Start");
        return (
            <div className="user-card">
                <img
                    src={avatar_url}
                    alt="Image no available"
                    height="200px"
                    width="200px"
                ></img>
                <p>Name: {name}</p>
                <p>Location: {location}</p>
                <p>count: {count}</p>
                <p>result: {result}</p>
                <button className="global-btn" onClick={() => updateCount()}>
                    Update State Variable
                </button>
                {console.log(this.props.name + " Inside child render")}
            </div>
        );
    }
}
