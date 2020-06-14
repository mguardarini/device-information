import React from 'react';
import {Image as RNImage, View} from 'react-native';
import PropTypes from 'prop-types';

type Props = {
  source: string;
  style: Object;
  testID?: string;
};

const Image = ({source, style, testID}: Props) => (
  <View>
    <RNImage
      testID={`image ${testID}`}
      source={{
        uri: source,
      }}
      style={style}
    />
  </View>
);

Image.defaultProps = {
    source: "",
    style:{}
};
  
Image.propTypes = {
  source: PropTypes.string.isRequired,
  style: PropTypes.object,
  testID: PropTypes.string,
};

export default Image;
