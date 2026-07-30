import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function EditarPerfilScreen({ navigation, route }) {
  const [nombre, setNombre] = useState(route.params?.nombreActual || 'Esteban David Pinto De la cruz');
  const [email, setEmail] = useState(route.params?.emailActual || 'estebandp97@hotmail.com');

  const guardarCambios = () => {
    navigation.navigate('MainTabs', {
      screen: 'PerfilTab',
      params: { nuevoNombre: nombre, nuevoEmail: email },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre completo</Text>
        <TextInput 
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Tu nombre completo"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput 
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Tu correo electrónico"
        />
      </View>

      <TouchableOpacity style={styles.botonGuardar} onPress={guardarCambios}>
        <Text style={styles.botonTexto}>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonCancelar} onPress={() => navigation.goBack()}>
        <Text style={styles.botonCancelarTexto}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c8c5c5',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9a9999',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#dadbfb',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  botonGuardar: {
    backgroundColor: '#2d4acb',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
  },
  botonTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botonCancelar: {
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  botonCancelarTexto: {
    color: '#ff0707',
    fontSize: 15,
  },
});