import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },
  mainTitle: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  table: {
    marginTop: 20
  },
  headText: {
    color: '#fff',
    margin: 10
  },
  bodyText: {
    color: '#000',
    margin: 10
  },
  borderTable: {
    borderWidth: 1,
    borderColor: '#4d4d4d'
  },
  wrapper: {
    flexDirection: 'row'
  },
  head: {
    height: 40,
    backgroundColor: '#212529'
  },
  body: {
    height: 35
  },
  inputForm: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 50
  },
  textInput: {
    height: 40, 
    borderColor: '#4d4d4d',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    flex: 3
  },
  buttonAdd: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#212529'
  },
  buttonText: {
    color: '#fff',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto'
  }
})
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['No.', 'To do'],
      tableData: [],
      data: ['Eat', 'Sleep', 'Study'],
      text: ''
    }
  }

  componentDidMount() {
    this.renderData(this.state.data)
  }

  renderData = (data) => {
    let tableData = data.map((val, index) => {
      return [index+1, val]
    })
    this.setState({
      tableData
    })
  }

  onAddPress = () => {
    let newData = [...this.state.data, this.state.text]
    this.renderData(newData)
    this.setState({
      data: newData,
      text: ''
    })
  }
 
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.mainTitle}>Todo App</Text>
        <Table borderStyle={styles.borderTable} style={styles.table}>
          <Row data={this.state.tableHead} flexArr={[1, 4]} style={styles.head} textStyle={styles.headText}/>
          <TableWrapper style={styles.wrapper}>
            <Rows data={this.state.tableData} flexArr={[1, 4]} style={styles.body} textStyle={styles.bodyText}/>
          </TableWrapper>
        </Table>
        <View style={styles.inputForm}>
          <TextInput
            style={styles.textInput}
            onChangeText={e => this.setState({text: e})}
            value={this.state.text}
          />
          <TouchableOpacity
            onPress={() => this.onAddPress()}
            style={styles.buttonAdd}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default App