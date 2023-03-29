import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BillTotalForm from './components/BillTotalForm';
import PercentageSlider from './components/PercentageSlider';
import PersonsSlider from './components/PersonsSlider';
import PreTaxToggle from './components/PreTaxToggle';
import ResultDisplay from './components/ResultDisplay';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>Simple Calculator</Text>
      <BillTotalForm />

      <PersonsSlider />
      <PercentageSlider />
      <PreTaxToggle />

      <ResultDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige',
  },

  titleHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },

});
