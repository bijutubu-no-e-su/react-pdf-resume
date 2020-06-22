import React, { FC } from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Text from 'components/atoms/Text';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    padding: 6,
  },
});

const Title: FC = (props) => (
  <Text style={styles.title} size="large">
    {props.children}
  </Text>
);

export default Title;
