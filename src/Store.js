import React from 'react';
import IconSwitch from './IconSwitch.js';
import ListView from './ListView.js';
import CardsView from './CardsView.js';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];



class Store extends React.Component {
  constructor() {
    super();
    this.state = {
      icon: 'view_module'
     };
     this.switchIcon = this.switchIcon.bind(this);
   }

  switchIcon() {
    return this.setState({ icon: this.state.icon === 'view_list' ? 'view_module' : 'view_list' }); 
  }

   render() {
    
    return (
      <div>
      <div className = 'toolbar'>
        <IconSwitch icon={this.state.icon} onSwitch={() => this.switchIcon() }/>
      </div>
        { this.state.icon === 'view_module' ?
           <div><ListView items={products}/></div> :
           <div><CardsView cards={products}/></div> 
        } 
      </div>
    );

  }

}

  export default Store;