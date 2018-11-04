import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  addTodo = (text) => {
    this.props.dispatch(addTodo(text));
    this.setState({ text: '' });
  }

  render() {
    return (
        <View style={styles.todoRow}>
          <TextInput
            placeholder='Eg. Create new Video'
            style={styles.textInput}
            value={this.state.text}
            onChangeText={(text)  => this.setState({ text })}
          />
          <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
            <View style={styles.addTodoContainer}>
              <Icon
                name="md-add"
                size={30}
                style={styles.icon} />
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
  todoRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea',
    height: 50,
    flex: 1,
    padding: 5,
  },
  addTodoContainer: {
    height: 50,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#de9595',
    padding: 10,
  },
});
