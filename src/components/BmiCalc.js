import React, { Component } from 'react';


class BmiCalc extends Component {
    state = {
        time: '',
        heightValue:{
            value:150,
            min:90,
            max:250,
        },
        massValue:{
            value:50,
            min:35,
            max:350,
        }
    };
    scaleBMI = {
        //
        'Underweight': {min:0,max:18.5},
        'Normal weight': {min:18.5,max:25},
        'Overweight': {min:25,max:30},
        'Obese': {min:25,max:Infinity},

    };
    handleHeight = (event) => {
        let heightValue = {...this.state.heightValue};
        heightValue.value = event.target.value;
        this.setState({heightValue});
    };
    handleWeight = (event) => {
        let massValue = {...this.state.massValue};
        massValue.value = event.target.value;
        this.setState({massValue});
    };
    countBMI = (mass,height) => {
       return (mass / Math.pow(height / 100, 2)).toFixed(1)
    };

    render() {
        let bmi = this.countBMI(this.state.massValue.value, this.state.heightValue.value);
        return (
            <div className={'Calc'}>
                <h1>Body Mass Index Calculator</h1>
                <div className="heightInput">
                    {this.state.heightValue.min}
                    <input type="range"
                           value={this.state.heightValue.value}
                           min={this.state.heightValue.min}
                           max={this.state.heightValue.max}
                           onChange={this.handleHeight}/>
                    {this.state.heightValue.max}
                </div>
                <b>{this.state.heightValue.value}cm</b>

                <div className="massInput">
                    {this.state.massValue.min}
                    <input type="range"
                           value={this.state.massValue.value}
                           min={this.state.massValue.min}
                           max={this.state.massValue.max}
                           onChange={this.handleWeight}/>
                    {this.state.massValue.max}
                </div>
                <b>{this.state.massValue.value}kg</b>

                <h2>BMI={bmi}</h2>
                {Object.keys(this.scaleBMI).map((key)=>{
                    console.log(this.scaleBMI[key].max)
                    if(this.scaleBMI[key].min < bmi && bmi < this.scaleBMI[key].max){
                            return key;
                    }
                })}
            </div>
        );
    }
}


export default BmiCalc;