import { useEffect } from 'react';

import { View } from 'react-native';

import { useVideoPlayer, VideoView } from 'expo-video';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

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
        style={styles.containerStyle}
      />
      <SearchInput />
    </View>
  );
};

const stylesheet = createStyleSheet({
  containerStyle: {
    width: '100%',
    height: 250,
  },
});
