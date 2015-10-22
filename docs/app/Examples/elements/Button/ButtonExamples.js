import React, {Component} from 'react';
import ButtonTypesExamples from './Types/ButtonTypesExamples';
import ButtonStatesExamples from './States/ButtonStatesExamples';
import ButtonsVariationsExamples from './Variations/ButtonsVariationsExamples';

export default class ButtonExamples extends Component {
  render() {
    return (
      <div>
        <ButtonTypesExamples />
        <ButtonStatesExamples />
        <ButtonsVariationsExamples />
      </div>
    );
  }
}
