import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TodoList = ({ todos, toggleTodo }) => (
  <View styles={styles.container}>
    {todos.map((todo) =>
      <Text style={{
          fontSize: 24,
          textDecorationLine:
            todo.completed ?
            'line-through' : 'none'
        }}>{todo.text}</Text>
    )}
  </View>
);

export default TodoList;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  container: {
    padding: 20,
  },
});
