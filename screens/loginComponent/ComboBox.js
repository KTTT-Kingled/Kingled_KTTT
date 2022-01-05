import React, { Component } from 'react';
import DropdownMenu from 'react-native-dropdown-menu';
import { View, Text } from "react-native";
export default class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
}
render() {
    var data = [["Data Science" ,"Python","Ruby"]];
    return (
    <View style={{flex: 1}}>
          <View style={{height: 52}} />
              <DropdownMenu
              style={{flex: 0.5}}
              bgColor={'grey'}
              tintColor={'#000000'}
              activityTintColor={'red'}
              handler={(selection, row) => this.setState({text: data[selection][row]})}
              data={data}
              >
              </DropdownMenu>
    </View>
    );
}
}
// npm i react-native-dropdown-menu
// npm install --save react-native-material-dropdown