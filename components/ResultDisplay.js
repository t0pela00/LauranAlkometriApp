import React from 'react';
import { View, Text } from 'react-native';

export default function ResultDisplay({ bac }) { // propsi veren alkoholipitoisuus
  let color = 'green';
  if (bac >= 0.5) color = 'yellow'; // jos 0,5 yli niin keltainen
  if (bac >= 1.2) color = 'red'; // jos yli 1,2 punainen

  return (
    <View>
      <Text style={{ fontSize: 20, color }}>
        Arvio veren alkoholipitoisuudesta: {bac.toFixed(2)}
      </Text>
    </View>
  );
}
