import React from "react";

class ClassComp extends React.Component {


    render() {
        return <div>
            <h3>Name of corp: {this.props.name}</h3>
            <h3>Game: {this.props.game}</h3>
        </div>
    }
}

ClassComp.defaultProps = {name: "Arasaka", game: "CyberPunk 2077"}
export default ClassComp;