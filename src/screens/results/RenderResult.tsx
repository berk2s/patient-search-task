import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchItem} from '../../redux/types';
import {capitalizeFirstChar} from '../../utils/capitalize';

export const RenderResult = (props: any): any => {
  const item: SearchItem = props.item.item;

  const phone = item.resource.telecom.filter(t => t.system === 'phone');
  const address = item.resource.address[0];

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemHeaderArea}>
        <Text style={styles.nameText}>
          {item.resource.name[0].given} {item.resource.name[0].family}
        </Text>
        <Text> - </Text>
        <Text>{capitalizeFirstChar(item.resource.gender)}</Text>
      </View>

      <View style={styles.itemContentArea}>
        <View style={styles.itemDetailSection}>
          <Text style={styles.sectionTitleText}>ID: </Text>
          <Text style={styles.sectionContentText}>{item.resource.id}</Text>
        </View>

        <View style={styles.itemDetailSection}>
          <Text style={styles.sectionTitleText}>Phone: </Text>
          <Text style={styles.sectionContentText}>
            {phone.length > 0 ? phone[0].value : 'Not available'}
          </Text>
        </View>

        <View style={styles.itemDetailSection}>
          <Text style={styles.sectionTitleText}>From: </Text>
          <Text style={styles.sectionContentText}>
            {address
              ? `${address.line[0]}, ${address.city}, ${address.country}`
              : 'Not available'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContentText: {},
  sectionTitleText: {
    fontWeight: '500',
  },
  itemDetailSection: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  addressLine: {
    fontWeight: '500',
  },
  itemContentArea: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 15,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemHeaderArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 25,
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: 90,
    borderBottomWidth: 1,
    borderColor: '#B2B1B9',
    marginBottom: 15,
    paddingHorizontal: 3,
  },
});
