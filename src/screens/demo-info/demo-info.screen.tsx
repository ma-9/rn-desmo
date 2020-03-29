import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@app/types';
import Divider from './divider.component';
import SectionHeader from './section-header.component';
import ContributorItem from './contributor-item.component';
import ReferenceItem from './references-item.component';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'DemoInfo'>;

const DemoInfoScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<ProfileScreenRouteProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.item.title || 'Demo',
    });
  }, [navigation, route.params.item.title]);

  const collaborators = route.params.item.collaborators;
  const references = route.params.item.references;

  return (
    <ScrollView style={styles.root}>
      <SectionHeader title="Contributors" />
      {collaborators.map((item, index) => (
        <React.Fragment key={String(index)}>
          {index !== 0 && <Divider />}
          <ContributorItem
            thumbnail={item.thumbnail}
            fullname={item.fullname}
            role={item.role}
          />
        </React.Fragment>
      ))}
      {references.length > 0 && (
        <View>
          <Divider />
          <SectionHeader title="References" />
          {references.map((item, index) => (
            <React.Fragment key={String(index)}>
              {index !== 0 && <Divider />}
              <ReferenceItem title={item.title} link={item.link} />
            </React.Fragment>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default DemoInfoScreen;
