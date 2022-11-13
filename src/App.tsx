import React from 'react';
import VCard from 'vcard-creator'

import './App.css';

const contactCard = new VCard();

contactCard.addName('Durnford', 'Joe');

contactCard.getOutput();

console.log(encodeURIComponent(contactCard.getOutput()));
console.log(contactCard.buildVCard());

function App() {

  return (
    <div>
     <a href="https://www.dropbox.com/s/vvwp4aoxg5wp2mt/joe.vfc?dl=1">Contact</a>
    </div>
  );
}

export default App;
