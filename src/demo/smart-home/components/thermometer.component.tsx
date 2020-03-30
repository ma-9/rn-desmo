/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, LayoutRectangle, LayoutChangeEvent } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import MeasurementScale from './measurement-scale.component';

interface IThermometerProps {
  horizontal?: boolean;
  value: number;
  unit?: 'c' | 'f';
  min?: number;
  max?: number;
}

interface IState {
  layout: LayoutRectangle | null;
}

class Thermometer extends React.Component<IThermometerProps, IState> {
  static defaultProps = {
    min: 15,
    max: 50,
    unit: 'c',
  };

  state: IState = {
    layout: null,
  };

  handleLayout = (event: LayoutChangeEvent) => {
    this.setState({
      layout: event.nativeEvent.layout,
    });
  };

  private getProgressValue = () => {
    const { value, max, min } = this.props;
    const range = max! - min!;
    return Math.min(2.5, Math.max(0, Math.max(0, value - min!) / range));
  };

  private getLabelColor = (pValue: number) => {
    let labelColor = 'white';

    if (pValue < 0.5) {
      labelColor = 'black';
    }

    return labelColor;
  }

  renderVertical() {
    const { value, max, min } = this.props;

    const pValue = this.getProgressValue();
    const labelColor = this.getLabelColor(pValue);

    const layoutHeight = this.state.layout?.height || 0;
    var height = Math.max(0, layoutHeight - ((layoutHeight - 32 * 2) * pValue + 32));

    return (
      <View style={{ height: '100%', flexDirection: 'row' }}>
        <View style={{ height: '100%', width: 72, position: 'relative' }} onLayout={this.handleLayout}>
          <LinearGradient
            colors={['rgb(36, 232, 255)', 'rgb(2, 121, 226)']}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              borderRadius: 40,
              overflow: 'hidden',
            }}>
            <View style={{ flex: 1 }}>
              <View style={{ height: height, backgroundColor: 'rgb(221, 234, 240)' }} />
            </View>
          </LinearGradient>
          <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: labelColor }}>{`${value}º${this.props.unit}`}</Text>
          </View>
        </View>
        <View style={{ marginLeft: 16, paddingTop: 32, paddingBottom: 32 }}>
          <MeasurementScale
            horizontal={this.props.horizontal}
            scaleColor="rgb(221, 234, 240)"
            fillColor="rgb(2, 121, 226)"
            minValue={min}
            maxValue={max}
            value={value}
            template={[32, 16, 16, 16, 16]}
            unitLength={16}
            startIndex={0}
            endIndex={0}
            thickness={2}
          />
        </View>
      </View>
    );
  }

  renderHorizontal() {
    const { value, max, min } = this.props;
    const pValue = this.getProgressValue();
    const labelColor = this.getLabelColor(pValue);

    const layoutWidth = this.state.layout?.width || 0;
    var width = Math.max(0, layoutWidth - ((layoutWidth - 32 * 2) * pValue + 32))

    return (
      <View style={{ width: '100%', flexDirection: 'column' }}>
        <View style={{ width: '100%', height: 56, position: 'relative' }} onLayout={this.handleLayout}>
          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['rgb(2, 121, 226)', 'rgb(0, 192, 226)']}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              borderRadius: 40,
              overflow: 'hidden',
            }}>
            <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
              <View style={{ width, height: '100%', backgroundColor: 'rgb(221, 234, 240)' }} />
            </View>
          </LinearGradient>
          <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: labelColor }}>{`${value}º${this.props.unit}`}</Text>
          </View>
        </View>
        <View style={{ paddingTop: 8, marginLeft: 24, paddingRight: 24 }}>
          <MeasurementScale
            horizontal={this.props.horizontal}
            scaleColor="rgb(183, 190, 197)"
            fillColor="rgb(2, 121, 226)"
            minValue={min}
            maxValue={max}
            value={value}
            template={[16, 8, 8, 8, 8]}
            unitLength={8}
            startIndex={0}
            endIndex={0}
            thickness={2}
          />
        </View>
      </View>
    );
  }

  render() {
    const { horizontal } = this.props;
    if (horizontal) {
      return this.renderHorizontal();
    }

    return this.renderVertical();
  }
}

export default Thermometer;
