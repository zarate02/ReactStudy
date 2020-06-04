import React from 'react';

class Customer extends React.Component{
    render(){
        return (
            <div>
                <CustomerInfo id={this.props.id} image={this.props.image}/>
                <CustomerProfile name={this.props.name} birthday={this.props.birthday}/>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return (
            <div>
                <h2>{this.props.id}</h2>
                <img src={this.props.image}></img>
            </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
            </div>
        )
    }
}

export default Customer