import React, { useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { Input, H1, Button } from 'native-base'

export default function App() {

  const [input, setInput] = useState('')
  const [data, setData] = useState([])

  const Item = (itemProp) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          marginBottom: 10
        }}
      >
        <Text 
          style={{color: 'white', flex: 4, marginTop: 'auto', marginBottom: 'auto'}}
        >
          {itemProp.text}
        </Text>
        <Button 
          danger 
          style={{
            flex: 1
          }} 
          onPress={() => setData(data.filter(val => val.key != itemProp.barang))}
        >
          <Text
            style={{
              color: 'white',
              marginTop: 'auto',
              marginRight: 'auto',
              marginBottom: 'auto',
              marginLeft: 'auto'
            }}
          >
            Delete
          </Text>
        </Button>
      </View>
    )
  }

  return (
    <View 
      style={{
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <View 
        style={{
          flex: 1,
          justifyContent: 'space-around'
        }}
      >
        <H1 
          style={{
            color: 'white',
            marginTop: 30,
            textAlign: 'center'
          }}
        >
          Todo App
        </H1>
        <View 
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            marginBottom: 20
          }}
        >
          <Input 
            onChangeText={(text) => setInput(text)} 
            placeholder='New Todo' 
            style={{
              borderWidth: 1,
              borderBottomColor: 'lightgrey',
              marginRight: 15,
              color: 'white',
              flex: 4
            }}
          />
          <Button 
            onPress={() => {
              setData([...data, {
                key: Date.now().toString(),
                value: input
              }])
            }}
            light
            style={{
              padding: 5,
              flex: 1
            }}
          >
            <Text
              style={{
                marginTop: 'auto',
                marginRight: 'auto',
                marginBottom: 'auto',
                marginLeft: 'auto'
              }}
            >
              Add
            </Text>
          </Button>
        </View>
      </View>
      <View style={{
        flex: 3
      }}>
        <FlatList data={data} renderItem={({item}) => <Item barang={item.key} text={item.value}/>}/>
      </View>
    </View>
  )
}