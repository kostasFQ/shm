import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CSS/forms.css';
import { addOptions } from '../../actions/index';

class AdditionalOptions extends Component {
    addOptions = () => {
      const optionsString = this.areaInput.value;
      const options = optionsString.split(/\n|[,.]/);
      console.log(options);
      this.props.onAddOptions(options);
    };

    render() {
      const options = 'акции, скидки, дни обновления товара и т.д.';
      return (
        <div className="label">
          <fieldset>
            <legend>Дополнительные условия</legend>
            <textarea
              placeholder={options}
              ref={(area) => { this.areaInput = area; }}
              defaultValue=""
              onBlur={this.addOptions}
            />
          </fieldset>
        </div>
      );
    }
}

export default connect(
  (state) => {
    return {
      localStore: state,
    };
  },
  (dispatch) => {
    return {
      onAddOptions: (options) => { return dispatch(addOptions(options)); },
    };
  },
)(AdditionalOptions);
