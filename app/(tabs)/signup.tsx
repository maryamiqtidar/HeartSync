import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./images/heartbeat.png')}
        style={styles.ecgImage}
      />
      <Text style={styles.title}>HEART SYNC</Text>
      <Text style={styles.subtitle}>Detect electrolyte imbalances</Text>

      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#AAA" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#AAA" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#AAA" secureTextEntry={true} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  ecgImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#E74C3C',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#F9F9F9',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#E74C3C',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
