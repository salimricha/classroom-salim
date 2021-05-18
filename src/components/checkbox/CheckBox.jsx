import React from 'react';
//import './CheckBox.css';

class CheckBox extends React.Component {


    render() {

        return (
            <div>
                <label class="container" >
                    <input type = "checkbox" />
                    &nbsp;Checking a box
                </label>
            </div>

        );
    }
}

export default CheckBox;