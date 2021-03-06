import React from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import iconAddFarovite from '../../assets/images/icon-add-favorite.png';
import iconClickFarovite from '../../assets/images/icon-click-favorite.png';

import { ContentType } from '../../types/enum';

import * as S from './styles';
import { FavoriteButtonProps } from './types';

const FavoriteButton = ({
  contentType = ContentType.character,
  title = '',
  onPress,
  withAnimation,
}: FavoriteButtonProps) => {
  const leftAnimatedView = useSharedValue(0);
  const textLabel = title || `Add Your ${contentType}`;

  const iconLabel = title
    ? `click ${title} icon`
    : `click add ${contentType} icon`;

  const iconImage = title ? iconClickFarovite : iconAddFarovite;

  const handlePress = () => {
    if (withAnimation) {
      leftAnimatedView.value = withSequence(withTiming(100), withTiming(0));
      return setTimeout(onPress, 500);
    }
    onPress();
  };

  const viewAnimatedStyles = useAnimatedStyle(() => {
    return { left: leftAnimatedView.value };
  });

  return (
    <S.Wrapper onPress={handlePress} accessibilityLabel={textLabel}>
      <S.View style={viewAnimatedStyles} testID="animated-view">
        <S.Title>{textLabel}</S.Title>
        <S.Icon source={iconImage} accessibilityLabel={iconLabel} />
      </S.View>
    </S.Wrapper>
  );
};

export default FavoriteButton;
