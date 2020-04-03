import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ITabContainerProps {
  ThemeColor: string;
  SecondaryColor: string;
}

const TabContainer: React.FC<ITabContainerProps> = props => {
  const [step, setStep] = useState(1);
  const { ThemeColor, SecondaryColor } = props;

  return (
    <View style={styles.root}>
      {step === 1 ? (
        <TouchableOpacity
          onPress={() => setStep(1)}
          style={styles.iconContainer}>
          <Icon name="desktop" color={ThemeColor} size={28} />
          <Text style={[styles.activeDotContainer, { color: ThemeColor }]}>
            .
          </Text>
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
          <Icon name="bell" color={ThemeColor} size={28} />
          <Text style={[styles.activeDotContainer, { color: ThemeColor }]}>
            .
          </Text>
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
          <Icon name="cog" color={ThemeColor} size={28} />
          <Text style={[styles.activeDotContainer, { color: ThemeColor }]}>
            .
          </Text>
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
  },
});

export default TabContainer;
