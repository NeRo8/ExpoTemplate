import { useEffect } from 'react';

import { View } from 'react-native';

import { useRouter } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { SearchInput } from '@components/inputs/SearchInput';
import { CustomText } from '@components/textes/CustomText';

import { videos } from '@constants/videos';

export const Header = () => {
  const { styles } = useStyles(stylesheet);

  const router = useRouter();

  const player = useVideoPlayer(videos.desertBackground, (player) => {
    player.loop = true;
  });

  useEffect(() => {
    player.play();
  }, [player]);

  const handleFocus = () => {
    router.push('/search-modal');
  };

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
      <SearchInput
        onFocus={handleFocus}
        inputContainerStyle={styles.inputContainerStyle}
      />
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
  inputContainerStyle: {
    position: 'absolute',
    zIndex: 100,
    bottom: theme.paddings.md,
    left: theme.paddings.md,
    right: theme.paddings.md,
  },
}));
