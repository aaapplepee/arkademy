import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {
        nama: 'Code',
        age: 16,
        gender: 'Male',
        number: 0
    }
    componentDidMount() {
        this.setState({
            nama: 'Akmal',
            age: 17,
            gender: 'Lanang'
        })
    }

    handleAddValue() {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleMinValue() {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1
            })
        }
    }

    handleResetValue(){
        this.setState({
            number : 0
        })
    }

    render() {
        return (
            <div>
                <h1>Hello my name is {this.state.nama} My age is: {this.state.age} My Gender: {this.state.gender} </h1>
                <div>
                    <h1><b>{this.state.number}</b></h1>

                    <button onClick={() => this.handleAddValue()}>Tambahkan 1</button>
                    <button onClick={() => this.handleMinValue()}>Kurangkan 1</button>
                    <button onClick={() => this.handleResetValue()}>Reset value</button>
                </div>
            </div>
        )
    }
}

export default HelloWorld;