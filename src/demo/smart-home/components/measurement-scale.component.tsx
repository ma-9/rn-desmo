import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

interface IMeasurementScaleProps {
  horizontal?: boolean;
  scaleColor?: string;
  fillColor?: string;
  minValue?: number;
  maxValue?: number;
  value: number;
  template?: number[];
  unitLength?: number;
  startIndex?: number;
  endIndex?: number;
  thickness?: number;
}

interface ILine {
  width: number;
  color: string;
}

const MeasurementScale: React.FC<IMeasurementScaleProps> = props => {
  const [lines, setLines] = useState<ILine[]>([]);

  const {
    scaleColor,
    minValue,
    maxValue,
    value,
    thickness,
    template,
    unitLength,
    startIndex,
    endIndex,
    horizontal,
  } = props;

  const fillColor = props.fillColor || scaleColor;

  useEffect(() => {
    const _lines: ILine[] = [];
    for (let i = 0; i < unitLength!; i++) {
      for (let j = 0; j < template!.length; j++) {
        if (i === 0 && j < startIndex!) {
          continue;
        }

        if (i === unitLength! - 1 && j > endIndex!) {
          break;
        }

        _lines.push({
          width: template![j],
          color: scaleColor!,
        });
      }
    }

    const p = (value - minValue!) / (maxValue! - minValue!);

    const midIndex = _lines.length * p;

    for (let i = 0; i < _lines.length; i++) {
      if (i > midIndex) {
        break;
      }

      _lines[i].color = fillColor!;
    }

    setLines(_lines);
  }, [
    maxValue,
    minValue,
    unitLength,
    startIndex,
    endIndex,
    template,
    fillColor,
    scaleColor,
    value,
  ]);

  return (
    <View style={horizontal ? styles.rootHorizontal : styles.rootVertical}>
      {lines.map((item, index) => (
        <View
          key={String(index)}
          style={{
            width: horizontal ? thickness : item.width,
            height: horizontal ? item.width : thickness,
            backgroundColor: item.color,
          }}
        />
      ))}
    </View>
  );
};

MeasurementScale.defaultProps = {
  thickness: 1,
  startIndex: 0,
  endIndex: 0,
  unitLength: 10,
  template: [16, 8, 8, 8, 8],
  horizontal: false,
  minValue: 0,
  maxValue: 10,
  scaleColor: 'rgb(200, 200, 200)',
};

const styles = StyleSheet.create({
  rootVertical: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  rootHorizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MeasurementScale;
