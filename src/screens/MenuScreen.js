import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, StyleSheet, Switch, ScrollView, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../components/Context";

import { TouchableRipple, Avatar, Title, Caption } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainTabScreen from "./MainTabScreen";


const MenuScreen = () => {
  const { colors } = useTheme();
  const { signOut, toggleTheme } = React.useContext(AuthContext);
  //const { params } = this.props.navigation.state;

  const navigationTheme = useTheme();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        
        
        <TouchableRipple
        onPress={() => {
          toggleTheme();
        }}
        >
        <View style={styles.preference}>
          
          <Text >
             Dark Theme <Icon name="moon-waning-crescent" size={19}/>
          </Text>
          <View pointerEvents="none">
            <Switch value={navigationTheme.dark} />
          </View>
        </View>
       
        </TouchableRipple>
        <View style={{flexDirection: 'row', marginTop:15}}>
           <Avatar.Image
            source={require('../../assets/profile.png')}
            size={80}
        />
        <View style={{marginLeft:20}}>
          <Title style={[styles.title,, {
              marginTop:15,
              marginBottom: 5,
            }]}>Sama Trading PLC</Title>
          <Caption style={[styles.caption]}>@Sama_trading</Caption>
        </View>
        </View>

        <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Addis Ababa, ETHIOPIA</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+251913667830</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>sama_trading@gmail.com</Text>
          </View>
          <View style={styles.row}>
          <Icon name="web" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>www.samatrading.com</Text>
        </View>
      </View>
       
        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>15</Title>
            <Caption>Active Listings</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>6</Title>
            <Caption>Sold Listings</Caption>
          </View>
      </View>
         
         <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#625D5D" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#625D5D" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#625D5D" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="shield" color="#625D5D" size={25}/>
            <Text style={styles.menuItemText}>Privacy Polcy</Text>
          </View>
          </TouchableRipple>
          
          </View>
        
     
         <TouchableOpacity
        onPress={() => {
          signOut();
        }}
      >
        <View style={styles.menuitem}>
         
          <Text style={[styles.logoutText, { color: colors.text }]}>
           <Icon name="door" size={19} /> Log Out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
   
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  screen: {
  backgroundColor: '#d3d3d3' , 
  },
  menuitem: {
    marginTop: 20,
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  logoutIcon: {
    fontSize: 30,
    marginRight: 10,
  },
   logoutText: {
     fontSize: 15,
     fontWeight: 'bold',
     marginLeft: 12,
   },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 15,
  },
   row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
    userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 30,
  },
    infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
     infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
      menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuWrapper: {
    marginTop: 10,
  },
   menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
