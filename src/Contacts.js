import React, { Component } from 'react';
import './App.css';

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
      	<h1>Here is where to find me...before I find you</h1>
      	<ol>
      		<li>555-555-5555</li>
      		<li>totally_licensed_dentists@realdoctor.gov</li>
      		<li>Whisper my name into a pidgeons ear, they can usually find me.</li>
      	</ol>
      </div>
    );
  }
}

export default Contacts;
