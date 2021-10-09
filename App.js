import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tinyLogo: {
    width: 80,
    height: 60,
  },
  buttonView: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  settings: {
    width: 40,
    height: 30,
  },
  heading: {
    fontWeight: 'bold',
    backgroundColor: 'teal',
    textAlign: 'center',
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  spacearound: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  circleBorder: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 50,
  },
  smallFont: {
    fontSize: 8,
    textAlign: 'center',
    marginLeft: 17,
    marginRight: 17,
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.spacearound} onPress={() => navigation.navigate('Settings')}>
          <Image
            style={styles.settings}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/933/PNG/512/three-dots-more-indicator_icon-icons.com_72518.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.spacearound} onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.tinyLogo}
            source={require('./images/TRI.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.spacearound} onPress={() => navigation.navigate('Log')}>
          <Text style={{ fontWeight: 'bold' }}>LOG</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <Button
          color="gray"
          title="Swim"
          onPress={() => navigation.navigate('Swim')}
        />
        <Button
          color="gray"
          title="Bike"
          onPress={() => navigation.navigate('Bike')}
        />
        <Button
          color="gray"
          title="Run"
          onPress={() => navigation.navigate('Run')}
        />
      </View>

      <View>
        <Text style={styles.heading}>PERSONAL BEST</Text>

        <View style={styles.inline}>
          <Text style={styles.spacearound, styles.bold}>SWIM</Text><Text style={styles.spacearound, styles.bold}>BIKE</Text><Text style={styles.spacearound, styles.bold}>RUN</Text>
        </View>

        <View style={styles.inline}>
          <View style={styles.circleBorder}>
            <Text style={styles.spacearound, styles.smallFont}>Distance</Text><Text style={styles.spacearound, styles.bold}>0 LAPS</Text><Text style={styles.spacearound, styles.smallFont}>Time</Text><Text style={styles.spacearound, styles.bold}>00:00</Text>
          </View>
          <View style={styles.circleBorder}>
            <Text style={styles.spacearound, styles.smallFont}>Distance</Text><Text style={styles.spacearound, styles.bold}>0 MILES</Text><Text style={styles.spacearound, styles.smallFont}>Time</Text><Text style={styles.spacearound, styles.bold}>00:00</Text>
          </View>
          <View style={styles.circleBorder}>
            <Text style={styles.spacearound, styles.smallFont}>Distance</Text><Text style={styles.spacearound, styles.bold}>0 MILES</Text><Text style={styles.spacearound, styles.smallFont}>Time</Text><Text style={styles.spacearound, styles.bold}>00:00</Text>
          </View>
        </View>

      </View>

      <View>
        <Text style={styles.heading}>GOALS</Text>

        <View style={styles.inline}>
          <Text style={styles.spacearound, styles.bold}>SWIM</Text><Text style={styles.spacearound, styles.bold}>BIKE</Text><Text style={styles.spacearound, styles.bold}>RUN</Text>
        </View>

        <View style={styles.inline}>
          <View style={styles.circleBorder}>
            <Text style={styles.spacearound, styles.smallFont}>Distance</Text><Text style={styles.spacearound, styles.bold}>0 LAPS</Text><Text style={styles.spacearound, styles.smallFont}>Time</Text><Text style={styles.spacearound, styles.bold}>00:00</Text>
          </View>
          <View style={styles.circleBorder}>
            <Text style={styles.spacearound, styles.smallFont}>Distance</Text><Text style={styles.spacearound, styles.bold}>0 MILES</Text><Text style={styles.spacearound, styles.smallFont}>Time</Text><Text style={styles.spacearound, styles.bold}>00:00</Text>
          </View>
          <View style={styles.circleBorder}>
            <Text style={styles.spacearound, styles.smallFont}>Distance</Text><Text style={styles.spacearound, styles.bold}>0 MILES</Text><Text style={styles.spacearound, styles.smallFont}>Time</Text><Text style={styles.spacearound, styles.bold}>00:00</Text>
          </View>
        </View>

      </View>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      {/*<Button title="Go to Details... again" onPress={() => navigation.push('Details')}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>*/}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function LogScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Log Screen</Text>
      {/*<Button title="Go to Details... again" onPress={() => navigation.push('Details')}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>*/}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function RunScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Run Screen</Text>
      {/*<Button title="Go to Details... again" onPress={() => navigation.push('Details')}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>*/}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function BikeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bike Screen</Text>
      {/*<Button title="Go to Details... again" onPress={() => navigation.push('Details')}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>*/}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function SwimScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Swim Screen</Text>
      {/*<Button title="Go to Details... again" onPress={() => navigation.push('Details')}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>*/}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Log" component={LogScreen} />
        <Stack.Screen name="Run" component={RunScreen} />
        <Stack.Screen name="Bike" component={BikeScreen} />
        <Stack.Screen name="Swim" component={SwimScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
