import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import EditarPerfilScreen from './EditarPerfil';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tituloHome}>Bienvenido a mi primera aplicación con TaskMaster</Text>
    </SafeAreaView>
  );
}

function PerfilScreen({ navigation, route }) {
  const [nombre, setNombre] = useState('Esteban David Pinto De la cruz');
  const [email, setEmail] = useState('estebandp97@hotmail.com');

  useFocusEffect(
    useCallback(() => {
      if (route.params?.nuevoNombre) {
        setNombre(route.params.nuevoNombre);
      }
      if (route.params?.nuevoEmail) {
        setEmail(route.params.nuevoEmail);
      }
    }, [route.params])
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={require('./assets/User-Profile.jpg')} 
          style={styles.imagen}
        />
      </View>

      <View style={styles.nombreContainer}>
        <Text style={styles.nombreText}>{nombre}</Text>
      </View>

      <View style={styles.emailContainer}>
        <Text style={styles.emailText}>{email}</Text>
      </View>

      <TouchableOpacity 
        style={styles.botonEditar} 
        onPress={() => navigation.navigate('EditarPerfil', { nombreActual: nombre, emailActual: email })}
      >
        <Text style={styles.botonTexto}>Editar Perfil</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function TabNavegador() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#9faef3',
        tabBarInactiveTintColor: '#888888',
        headerTitleAlign: 'center',
        backgroundColor: '#000000',
        borderTopColor: '#222222',
      tabBarStyle: { 
        height: 60, 
        paddingBottom: 8, 
        paddingTop: 6,
        backgroundColor: '#000000',
        borderTopColor: '#222222',
      },
      headerStyle: {
        backgroundColor: '#000000',

      },
      headerTintColor: '#ffffff',
      }}
    >
    <Tab.Screen 
        name="Inicio" 
        component={HomeScreen} 
        options={{
          title: 'Inicio',
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
    />
      <Tab.Screen 
        name="PerfilTab" 
        component={PerfilScreen} 
        options={{
          title: 'Mi Perfil',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavegador}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="EditarPerfil" 
          component={EditarPerfilScreen} 
          options={{ 
            title: 'Editar Perfil', 
            headerStyle:{ 
              backgroundColor: '#000000',
            },
            headerTintColor: '#ffff',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 10,
  },
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  nombreContainer: {
    backgroundColor: '#1e1e1e',
    paddingVertical: 9,
    paddingHorizontal: 25,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 7,
    borderWidth: 0.6,
    borderColor: '#ffff',
    margin: 10,
    shadowColor: '#ffffff', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  nombreText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  emailContainer: {
    backgroundColor: '#1e1e1e',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 7,
    borderWidth: 0.6,
    borderColor: '#ffff', 
    marginBottom: 6,
    shadowColor: '#ffffff', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  emailText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  botonEditar: {
    backgroundColor: '#2d4acb',
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 7,
    elevation: 10,
  },
  botonTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tituloHome: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#ffffff',
    textAlign: 'center',
  },
});