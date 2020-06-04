import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Formius from 'formius';

import ConfigForm from './ConfigForm';;


export default class Profile extends Component {
  
  state = {
    configForm: ConfigForm,
    checkedStorage: false,
    keyStorage: 'Profile'
  };


  actionCaught = async (configForm, elemName) => 
  {
    const amountErrors = Object.keys(configForm.formErrors).length,
      { type } = configForm.elements[elemName];
      
    if(type === 'submit' && amountErrors === 0)
    {
      const stringStorage = JSON.stringify(configForm.formData);
      await AsyncStorage.setItem(this.state.keyStorage, stringStorage);
    }
  }

  async componentDidMount()
  {
    const stringStorage = await AsyncStorage.getItem(this.state.keyStorage),
      checkedStorage = true;

    if(stringStorage)
    {
      const formData = JSON.parse(stringStorage);
      this.setState({ 
        checkedStorage, 
        configForm: { ...ConfigForm, formData }
      });
    }
    else
    {
      this.setState({ checkedStorage });
    }
  }


  render() 
  {
    const { checkedStorage, configForm } = this.state;
    
    if(!checkedStorage)
    {
      return null;
    }
    
    return (
      <Formius 
        configForm={configForm}
        actionCaught={this.actionCaught}
      />
    )
  }
}