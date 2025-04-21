//import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet, ScrollView, TurboModuleRegistry } from 'react-native';
import ResultDisplay from './components/ResultDisplay';
import {Picker} from '@react-native-picker/picker';
import RadioGroup from 'react-native-radio-buttons-group'; // toka
import styles from './styles'; 
//kilkkeet joita tarvitaan 

export default function App() {
    const [weight, setWeight] = useState(null);
    const [time, setTime] = useState(null);
    const [bottles, setBottles] = useState(null);
    const [gender, setGender] = useState(null);
    const [promiles, setPromiles] = useState(null);
    const genders = [
        { id: 'male', label: 'Mies', value: 'male' },
        { id: 'female', label: 'Nainen', value: 'female' }
      ];

      useEffect(() => {
        const selected = genders.find(g => g.selected === true);
        if (selected) {
          setGender(selected.value);
        }
      }, [genders]);

    // Virheilmoitukset, että arvot tulee täytettyä ja lasku voidaan laskea     
    const calculateBAC = () => {
          if (!weight) {
            Alert.alert('Virhe', 'Syötä paino!');
            return;
          }
          if (!gender) {
            Alert.alert('Virhe', 'Valitse sukupuoli!');
            return;
          }
    //Laskutoimituksia varten tarvittavat tiedot
          const litres = bottles * 0.33;
          const grams = litres * 8 * 4.5;
          const burning = weight / 10;
          const gramsLeft = Math.max(0, grams - burning * time);
          const divider = gender === 'male' ? 0.7 : 0.6;
          const bac = gramsLeft / (weight * divider);
      
          setPromiles(bac);
        };
      
        return (
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Alkometri</Text> 
      
            <Text>Paino (kg)</Text>
            <TextInput
              style={styles.Input}
              keyboardType="numeric"
              placeholder='Syötä arvo'
              value={weight}
              onChangeText={(text) => setWeight(Number(text))}
            />
      
            <Text>Aika (tunnit)</Text>
            <Picker selectedValue={time} onValueChange={setTime} style={styles.picker}>
              {[...Array(24).keys()].map(i => (
                <Picker.Item key={i} label={`${i + 1} h`} value={i + 1} />
              ))}
            </Picker>
      
            <Text>Pullojen määrä</Text>
            <Picker selectedValue={bottles} onValueChange={setBottles} style={styles.picker}>
              {[...Array(100).keys()].map(i => (
                <Picker.Item key={i} label={`${i + 1} pulloa`} value={i + 1} />
              ))}
            </Picker>
      
            <Text>Sukupuoli</Text>
            <RadioGroup radioButtons={genders} onPress={setGender} selectedId={gender} />
            
            <Button title="Laske" onPress={calculateBAC} />
      
            {promiles !== null && <ResultDisplay bac={promiles} />}
          </ScrollView>
        );
      }

      //linkki videoon https://youtube.com/shorts/Pwnc_ciWqxY?feature=share
      
