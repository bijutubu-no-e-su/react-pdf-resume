import React, { Fragment } from 'react';
import { View } from '@react-pdf/renderer';
import Text from 'components/atoms/Text';

type propsType = {
  abouts: string[];
  contents: string[];
};

const Content = (props: propsType) => (
  <Fragment>
    <Text size="small" blod>
      【業務内容】
    </Text>
    <View style={{ marginBottom: 5 }}>
      {props.abouts.map((about, index) => (
        <Text size="small" key={index}>
          ・{about}
        </Text>
      ))}
    </View>
    <Text size="small" blod>
      【業務詳細】
    </Text>
    <View>
      {props.contents.map((content, index) => (
        <Text size="small" key={index}>
          ・{content}
        </Text>
      ))}
    </View>
  </Fragment>
);
export default Content;
