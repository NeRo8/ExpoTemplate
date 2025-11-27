import { useEffect } from 'react';

import { View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { SearchInput } from '@components/inputs/SearchInput';
import { CustomText } from '@components/textes/CustomText';

import { videos } from '@constants/videos';

export const Header = () => {
  const { styles, theme } = useStyles(stylesheet);

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
      <View style={styles.headerInputContainerStyle}>
        <SearchInput inputContainerStyle={styles.searchInputContainerStyle} />
        <Link href="/(modals)/search-modal">
          <View style={styles.filterIconContainerStyle}>
            <Ionicons
              name="filter-outline"
              size={24}
              color={theme.colors.white}
            />
          </View>
        </Link>
      </View>
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
  headerInputContainerStyle: {
    zIndex: 100,
    position: 'absolute',
    bottom: theme.paddings.md,
    left: theme.paddings.md,
    right: theme.paddings.md,
    flexDirection: 'row',
    gap: theme.paddings.md,
  },
  searchInputContainerStyle: {
    flex: 1,
  },
  filterIconContainerStyle: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadius.lg,
    height: 40,
    width: 40,
  },
}));
