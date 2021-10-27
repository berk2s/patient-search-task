import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SearchParams} from '../redux/types';

interface DropdownItem {
  id: any;
  key: string;
  value: any;
}

interface DropdownProps {
  onChange(item: any): void;
  placeholder: string;
  items: DropdownItem[];
  multiple: boolean;
}

export const Dropdown = (props: DropdownProps) => {
  const [selectedItems, setSelectedItems] = useState<DropdownItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const selectedItemNames = () => {
    return selectedItems.map((item, i) => {
      return i === selectedItems.length - 1 ? item.key : `${item.key}, `;
    });
  };

  const handleSelectedItem = (item: DropdownItem) => {
    let _selectedItems = [];
    if (isItemSelected(item.id)) {
      _selectedItems = selectedItems.filter(_item => _item.id !== item.id);
      setSelectedItems(_selectedItems);
    } else {
      if (props.multiple === true) {
        setSelectedItems(prev => [
          ...prev,
          {
            id: item.id,
            key: item.key,
            value: item.value,
          },
        ]);
        _selectedItems = [
          ...selectedItems,
          {
            id: item.id,
            key: item.key,
            value: item.value,
          },
        ];
      } else {
        _selectedItems = [item];
        setSelectedItems(_selectedItems);
      }
    }

    props.onChange(_selectedItems);

    setShowDropdown(false);
  };

  const isItemSelected = (itemId: number) => {
    return selectedItems.find(_item => _item.id === itemId);
  };

  const renderDropdownItem = ({item}: {item: DropdownItem}) => {
    return (
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          handleSelectedItem(item);
        }}>
        <Text
          style={[
            styles.dropdownItemText,
            isItemSelected(item.id) ? styles.selectedItemText : {},
          ]}>
          {item.key}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.dropdownAreaWrapper}>
      <TouchableOpacity
        style={styles.dropdownWrapper}
        onPress={() => setShowDropdown(!showDropdown)}>
        <Text style={styles.dropdownText}>
          {selectedItems.length > 0 ? selectedItemNames() : props.placeholder}
        </Text>
      </TouchableOpacity>
      {showDropdown && (
        <FlatList
          data={props.items}
          renderItem={renderDropdownItem}
          keyExtractor={item => item.id}
          style={styles.dropdownItemsWrapper}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  selectedItemText: {
    fontWeight: '600',
  },
  dropdownItemText: {},
  dropdownItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 44,
    borderBottomWidth: 0.2,
    borderColor: '#B2B1B9',
    paddingHorizontal: 5,
  },
  dropdownItemsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    zIndex: 999999,
    width: '100%',
    borderRadius: 8,
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#B2B1B9',
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    maxHeight: 176,
  },
  dropdownText: {
    color: '#595260',
  },
  dropdownWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 44,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#B2B1B9',
    paddingHorizontal: 12,
  },
  dropdownAreaWrapper: {zIndex: 999999},
});
