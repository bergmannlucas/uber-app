import { Platform, PixelRatio } from 'react-native';

export function getPixelsSize(pixels) {
  return Platform.select({
    ios: pixels,
    android: PixelRatio.getPixelSizeForLayoutSize(pixels),
  })
}