import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View>
      {/* inline-style */}
      <View style={{marginTop:50, backgroundColor:'red'}}>
        <Text>
          holitas
        </Text>
      </View>
      <View style={styles.mainView}>
        <Text>
          holitas
        </Text>
      </View>
    </View>
  )
}

//object style like css
const styles = StyleSheet.create({
  mainView : {
    padding : 100,
    backgroundColor : 'blue'
  }
});

export default App;