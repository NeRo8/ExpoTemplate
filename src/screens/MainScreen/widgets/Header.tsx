import { useEffect } from 'react';

import { View } from 'react-native';

import { useVideoPlayer, VideoView } from 'expo-video';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

import { videos } from '@constants/videos';

import { SearchInput } from './SearchInput';

export const Header = () => {
  const { styles } = useStyles(stylesheet);

  const player = useVideoPlayer(videos.desertBackground, (player) => {
    player.loop = true;
  });

  useEffect(() => {
    player.play();
  }, [player]);

  return (
    <View>
      <VideoView
        player={player}
        nativeControls={false}
        contentFit="cover"
        style={styles.videoContainerStyle}
      />
      <CustomText style={styles.headerTitleStyle}>
        YOUR{' '}
        <CustomText style={styles.headerBoldTitleStyle}>
          GATE TO DEVELOPMENT
        </CustomText>
      </CustomText>
      <SearchInput />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  videoContainerStyle: {
    width: '100%',
    height: 250,
  },
  headerTitleStyle: {
    position: 'absolute',
    zIndex: 100,
    bottom: 100,
    left: 20,
    right: 20,
    textAlign: 'center',
    fontSize: 24,
    color: theme.colors.white,
  },
  headerBoldTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: theme.colors.white,
  },
}));
