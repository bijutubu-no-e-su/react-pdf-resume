import React from 'react';
import { View } from '@react-pdf/renderer';
import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';

type propsType = {
  createDate: string;
  title: string;
};

const Header = (props: propsType) => (
  <View>
    <Text size="small" style={{ textAlign: 'right' }}>
      {props.createDate}
    </Text>
    <Title>{props.title}</Title>
  </View>
);
export default Header;
