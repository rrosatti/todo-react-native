import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TodoList = ({ todos, toggleTodo }) => (
  <View styles={styles.container}>
    {todos.map((todo) =>
      <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <Text style={{
          fontSize: 24,
          textDecorationLine:
            todo.completed ?
            'line-through' : 'none'
        }}>{todo.text}</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default TodoList;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  container: {
    padding: 40,
  },
});
