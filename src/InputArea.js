import { Component } from 'react';
import checkmark from './icon.png';

export class InputArea extends Component {
    state = {
        inputField: '',
        groceryList: [],
    }

    onChangeEvent(e) {
        this.setState({inputField: e});
    }

    addItem(input) {
        if (input === '') {
            alert(`Please enter an item`);
        }
        else {
            let inputValue = this.state.groceryList;
            inputValue.push(input);

            this.setState({groceryList: inputValue, inputField: ''});
        }
    }

    crossItem(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    deleteAll(listItem) {
        listItem = [];

        this.setState({groceryList: listItem});
    }

    onSubmitEvent(e) {
        e.preventDefault();
    }


    render() {
        return (
            <div className='InputArea-main-container'>
                <form onSubmit={this.onSubmitEvent}> 
                <div className='InputArea-container'>
                    <input className='InputArea-input' type='text' placeholder='What are you going to buy?'
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.inputField}/>

                    <ul className='InputArea-ul'>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossItem} key={index}>
                                <span className='InputArea-li-span'><img className='InputArea-checkmark' src={checkmark} alt='check'/></span>{item}</li>
                        ))}
                        
                    </ul>

                    <button className='InputArea-add-btn'
                    onClick={(e) => {this.addItem(this.state.inputField)}}>ADD ITEM</button>
                    <button className='InputArea-delete-btn'
                    onClick={(e) => {this.deleteAll(this.state.groceryList)}}>DELETE ALL</button>
                    
                </div>
                </form>
            </div>
        )
    }
}

