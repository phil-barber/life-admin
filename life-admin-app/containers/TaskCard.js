import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import Swipeout from 'react-native-swipeout'
import { connect } from 'react-redux'
import { completeTask } from '../actions/actions'

class TaskCard extends React.Component {
  render () {
    const { task } = this.props

    let swipeBtns = [{
      text: 'Complete',
      backgroundColor: 'transparent',
      color: 'green',
      onPress: () => this.completeTask(task.id)
    }]

    return (
      <Swipeout
        right={swipeBtns}
        autoClose
        backgroundColor='transparent'
      >
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('TaskFocus', {
            task,
            completeTask: this.completeTask.bind(this)
          })}
        >
          <View style={[styles.container, styles.card]}>
            <Text style={styles.title} >{task.title}</Text>
            <Text>
              <Text style={styles.details} >
                Extra details about the Task
              </Text>
              <Text>date?</Text>
            </Text>
          </View>
        </TouchableHighlight>
      </Swipeout>
    )
  }

  completeTask (id) {
    this.props.dispatch(completeTask(id))
    this.props.navigation.navigate('TaskFeed')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3
    }
  },
  title: {
    fontSize: 25
  },
  details: {
    fontSize: 20
  }
})

export default connect()(TaskCard)
