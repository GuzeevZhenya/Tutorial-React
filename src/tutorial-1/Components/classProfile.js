import React, { Component } from 'react';

class Classprofile extends Component {
	registrationData = (data) => (
		data.toLocaleString("ru", {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		})
	)
	render() {	
		return (
			<div>
        <p>Привет, <b>{this.props.name.split(' ').splice(0,1).join()}!</b></p>
        <p>Дата регистрации: {this.registrationData(this.props.registredAt)}</p>
    </div>
		);
	}
}

export default Classprofile;
