import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: []}
    }


    handleChangeText = (e) => {
        this.setState({value: e.target.value.split(/,|\n/g)});
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <textarea value={this.state.value} onChange={this.handleChangeText}></textarea>
                <br />
                {value.map((a,i)=>{
                    return (
                        <div key={i} style={{width: '50px', height: '25px', backgroundColor: '#'+a.slice(0,6)}}>#{a.trim()}</div>
                    )
                })}
            </div>
        );
    }
}

export default App;
