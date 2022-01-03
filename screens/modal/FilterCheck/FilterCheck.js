import React, { useState } from 'react';
import { View,StyleSheet, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function CheckBoxs(props) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                tintColors={{ true: '#425C59', false: '#425C59' }}
            />
        </View>
        <Text style={styles.label}>{props.nameCheckBox}</Text>
  </View>
  );
}
const styles = StyleSheet.create({
    checkboxContainer:{
      flexDirection: "row",
      borderColor: "#425C59",
      marginLeft: "5%",
    },
    checkbox:{
        width : 20,
        height: 20,
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
        justifyContent: "center"
    },
    label:{
        color: "#425C59",
        marginRight: 10,
        marginLeft: 3,
        marginTop: 5
    },
});