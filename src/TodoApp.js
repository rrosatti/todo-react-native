import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import AddTodo from './containers/AddTodo';

class TodoApp extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      visibilityFilter: 'SHOW_ALL',
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <AddTodo />
        </View>
    );
  }
}

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
