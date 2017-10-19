import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class ReactVrTodo extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('old-boys-school.jpg')} />
        <Text
          style={{
            backgroundColor: 'blue',
            padding: 0.02,
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [-10, 0, 0] }, , { rotateY: 90 }],
          }}>
          hello
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('react-vr-todo', () => ReactVrTodo);
