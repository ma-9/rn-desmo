import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PrimaryColor = 'green';
const SecondaryColor = 'rgb(127,127,127)';

const TabContainer = () => {
  const [step, setStep] = useState(1);

  return (
    <View style={styles.root}>
      {step === 1 ? (
        <TouchableOpacity
          onPress={() => setStep(1)}
          style={styles.iconContainer}>
          <Icon name="desktop" color={PrimaryColor} size={28} />
          <Text style={styles.activeDotContainer}>.</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setStep(1)}
          style={styles.iconContainer}>
          <Icon name="desktop" color={SecondaryColor} size={28} />
        </TouchableOpacity>
      )}
      {step === 2 ? (
        <TouchableOpacity
          onPress={() => setStep(2)}
          style={styles.iconContainer}>
          <Icon name="bell" color={PrimaryColor} size={28} />
          <Text style={styles.activeDotContainer}>.</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setStep(2)}
          style={styles.iconContainer}>
          <Icon name="bell" color={SecondaryColor} size={28} />
        </TouchableOpacity>
      )}
      {step === 3 ? (
        <TouchableOpacity
          onPress={() => setStep(3)}
          style={styles.iconContainer}>
          <Icon name="cog" color={PrimaryColor} size={28} />
          <Text style={styles.activeDotContainer}>.</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setStep(3)}
          style={styles.iconContainer}>
          <Icon name="cog" color={SecondaryColor} size={28} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    minHeight: PixelRatio.get() * 20,
  },
  iconContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
  activeDotContainer: {
    marginTop: PixelRatio.get() * -16,
    fontSize: PixelRatio.get() * 20,
    color: PrimaryColor,
  },
});

export default TabContainer;
