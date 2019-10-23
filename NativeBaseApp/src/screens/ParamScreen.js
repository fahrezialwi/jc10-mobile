import React from 'react'
import { View, Text } from 'react-native'

const ParamScreen = (props) => {

  checkNumber = (number) => {
    if(number % 2 === 0){
      return 'Genap'
    } else {
      return 'Ganjil'
    }
  }

	return (
		<View 
			style={{
				flexDirection : 'column',
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
      <Text style={{fontSize: 36, color: 'red'}}>
        Angka Anda adalah {props.navigation.getParam('text', 'NO-INPUT')}
      </Text>
      <Text style={{fontSize: 36, color: 'red'}}>
        ({checkNumber(props.navigation.getParam('text', 'NO-INPUT'))})
      </Text>
		</View>
	)
}

export default ParamScreen