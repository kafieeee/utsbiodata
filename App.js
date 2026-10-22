
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
} from 'react-native';

export default function App() {
  const [halaman, setHalaman] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pesan, setPesan] = useState('');

  const login = () => {
    if (email.trim() === '' || password.trim() === '') {
      setPesan('Email dan password harus diisi!');
      return;
    }

    setPesan('');
    setHalaman('home');
  };

  const logout = () => {
    setEmail('');
    setPassword('');
    setPesan('');
    setHalaman('login');
  };

  const bukaMenu = (menu) => {
    if (Platform.OS === 'web') {
      window.alert(`${menu} berhasil ditekan!`);
    } else {
      const { Alert } = require('react-native');
      Alert.alert(menu, `${menu} berhasil ditekan!`);
    }
  };

  if (halaman === 'login') {
    return (
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.title}>MY APP</Text>
          <Text style={styles.subtitle}>UTS MOBILE 1</Text>

          <TextInput
            style={styles.input}
            placeholder="INPUT EMAIL"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="INPUT PASSWORD"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {pesan !== '' && (
            <Text style={styles.errorText}>{pesan}</Text>
          )}

          <TouchableOpacity
            style={styles.loginButton}
            onPress={login}
          >
            <Text style={styles.buttonText}>
              TOMBOL LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.homeContent}
    >
      <Text style={styles.title}>HOME PAGE</Text>

      <View style={styles.profileBox}>
        <Image
          source={require('./assets/kafie.jpeg')}
          style={styles.profileImage}
          resizeMode="cover"
        />

        <Text style={styles.name}>KAFIE</Text>
      </View>

      <View style={styles.menuGrid}>
        {['MENU 1', 'MENU 2', 'MENU 3', 'MENU 4'].map(
          (menu) => (
            <TouchableOpacity
              key={menu}
              style={styles.menuBox}
              onPress={() => bukaMenu(menu)}
            >
              <Text style={styles.menuText}>
                {menu}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={logout}
      >
        <Text style={styles.buttonText}>
          TOMBOL LOGOUT
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  loginBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    color: '#333333',
    marginTop: 7,
    marginBottom: 45,
  },

  input: {
    width: '85%',
    maxWidth: 340,
    height: 48,
    borderWidth: 1,
    borderColor: '#555555',
    marginBottom: 15,
    paddingHorizontal: 12,
    textAlign: 'center',
    color: '#222222',
  },

  loginButton: {
    borderWidth: 1,
    borderColor: '#555555',
    paddingVertical: 13,
    paddingHorizontal: 25,
    marginTop: 12,
  },

  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },

  errorText: {
    fontSize: 13,
    color: 'red',
    marginBottom: 8,
  },

  homeContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 25,
    paddingBottom: 40,
  },

  profileBox: {
    width: '85%',
    maxWidth: 340,
    borderWidth: 1,
    borderColor: '#555555',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 30,
    marginBottom: 20,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#555555',
    marginBottom: 12,
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },

  menuGrid: {
    width: '85%',
    maxWidth: 340,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  menuBox: {
    width: '47%',
    height: 65,
    borderWidth: 1,
    borderColor: '#555555',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  menuText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222222',
  },

  logoutButton: {
    borderWidth: 1,
    borderColor: '#555555',
    paddingVertical: 13,
    paddingHorizontal: 25,
    marginTop: 15,
  },
});
