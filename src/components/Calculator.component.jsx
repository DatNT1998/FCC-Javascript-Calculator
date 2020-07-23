import React, { Component } from 'react';
import './Calculator.styles.css';
import {connect} from 'react-redux';

import {addElem, deleteText, equal} from '../redux/action';


class Calculator extends Component {
    render() { 

        return ( 
            <div >
                <div className='result'>
                    <input type='text' value={this.props.value} />
                </div>
                <div className="button">
                    <button name="(" onClick={e => this.props.addElem(e.target.name)}>(</button>
                    <button  id ='clear' name="CE" onClick={e => this.props.deleteText(e.target.name)}>CE</button>
                    <button name=")" onClick={e => this.props.addElem(e.target.name)}>)</button>
                    <button name="C" onClick={e => this.props.addElem(e.target.name)}>C</button><br/>


                    <button id='one' name="1" onClick={e => this.props.addElem(e.target.name)}>1</button>
                    <button id='two' name="2" onClick={e => this.props.addElem(e.target.name)}>2</button>
                    <button id='three' name="3" onClick={e => this.props.addElem(e.target.name)}>3</button>
                    <button id='add' name="+" onClick={e => this.props.addElem(e.target.name)}>+</button><br/>


                    <button id='four' name="4" onClick={e => this.props.addElem(e.target.name)}>4</button>
                    <button id='five' name="5" onClick={e => this.props.addElem(e.target.name)}>5</button>
                    <button id='six' name="6" onClick={e => this.props.addElem(e.target.name)}>6</button>
                    <button id='subtract' name="-" onClick={e => this.props.addElem(e.target.name)}>-</button><br/>

                    <button id='seven' name="7" onClick={e => this.props.addElem(e.target.name)}>7</button>
                    <button id='eight' name="8" onClick={e => this.props.addElem(e.target.name)}>8</button>
                    <button id='night' name="9" onClick={e => this.props.addElem(e.target.name)}>9</button>
                    <button id='multiply' name="*" onClick={e => this.props.addElem(e.target.name)}>x</button><br/>


                    <button id='decimal' name="." onClick={e => this.props.addElem(e.target.name)}>.</button>
                    <button id='zero' name="0" onClick={e => this.props.addElem(e.target.name)}>0</button>
                    <button id='equal' name="=" onClick={e => this.props.equal(e.target.name)}>=</button>
                    <button id='divide' name="/" onClick={e => this.props.addElem(e.target.name)}>÷</button><br/>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    value: state.value,
})
 
const mapDispatchToProps = (dispatch) => ({
    addElem: (text) => dispatch(addElem(text)),
    deleteText: (value) => {dispatch(deleteText(value))},
    equal: (value) => dispatch(equal(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);