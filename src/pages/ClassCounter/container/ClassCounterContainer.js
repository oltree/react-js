import React, { PureComponent } from "react";

import Counter from "../../../components/Counter";

class ClassCounterContainer extends PureComponent {
  constructor() {
    super();

    this.state = {
      countValue: 0,
    };

    this.handleReset = this.handleReset.bind(this); //синтаксис без arrow Fn

    //console.log("Conctuctor");
  }

  handleIncremet = () => {
    this.setState((state) => ({ countValue: state.countValue + 1 })); //неявный return объекта
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => {
        //явный return объекта
        return {
          countValue: state.countValue - 1,
        };
      });
    }
  };

  handleReset() {
    //синтаксис без arrow Fn
    this.setState({
      countValue: 0,
    });
  }

  render() {
    //console.log("render");
    return (
      <Counter
        countValue={this.state.countValue}
        onIncrement={this.handleIncremet}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
      />
    );
  }
}

export default ClassCounterContainer;

//Методы жизненного цикла
/* componentDidMount() {
    //обычно отправляют API-запросы(самое удобное место)
    console.log("Did mount");
  } */

/* componentDidUpdate(prevProps, prevState, snapshot) {
    //можно делать доп. запросы(например пагинация)
    console.log("Did update");
  } */

//нет смысла использовать, т.к. мы used PureComponent(а этот метод так есть из коробки)
/* shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("Should update?");

    return true;
  } */

/* componentWillUnmount() {
    //обычно вызывают clearTimeout(подчищаем за собой все)
    console.log("Did unmount");
  } */
