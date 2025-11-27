import { TouchableOpacity, View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '../textes/CustomText';

interface SegmentControlItemProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

export type SegmentItem = {
  id: string;
  title: string;
};

interface SegmentControlProps {
  data: SegmentItem[];
  activeId: string;
  onPress: (id: string) => void;
}

export const SegmentControlItem = ({
  title,
  active,
  onPress,
}: SegmentControlItemProps) => {
  const { styles } = useStyles(stylesheet, { active });
  return (
    <TouchableOpacity onPress={onPress} style={styles.segmentControlItemStyle}>
      <CustomText style={styles.segmentControlItemTitleStyle}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export const SegmentControl = ({
  data = [],
  activeId,
  onPress,
}: SegmentControlProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.segmentControlContainerStyle}>
      {data.map((item) => {
        const isActive = item.id === activeId;

        const handlePress = () => onPress(item.id);

        return (
          <SegmentControlItem
            key={item.id}
            title={item.title}
            active={isActive}
            onPress={handlePress}
          />
        );
      })}
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  segmentControlContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.paddings.sm,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.xxl,
    backgroundColor: theme.colors.white,
    padding: theme.paddings.xxs,
  },
  segmentControlItemStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.paddings.sm,
    borderRadius: theme.borderRadius.xxl,
    variants: {
      active: {
        true: {
          backgroundColor: theme.colors.primary,
        },
        false: {
          backgroundColor: theme.colors.white,
        },
      },
    },
  },
  segmentControlItemTitleStyle: {
    color: theme.colors.white,
    variants: {
      active: {
        true: {
          color: theme.colors.white,
          fontWeight: theme.fontWeights.bold,
        },
        false: {
          color: theme.colors.paragraph,
        },
      },
    },
  },
}));
