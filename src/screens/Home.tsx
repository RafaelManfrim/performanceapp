import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import { FriendsList } from '../components/FriendsList';

export function Home() {
  const [friends, setFriends] = useState([])
  const [name, setName] = useState('')

  async function handleSearch() {
    const response = await fetch(`http://10.0.0.105:3333/friends?q=${name}`)
    const data = await response.json()
    setFriends(data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>
      <TextInput placeholder="Nome do cliente" onChangeText={setName} style={styles.input} />

      <Button title="Buscar" onPress={handleSearch} />

      <ScrollView style={{ marginTop: 20 }}>
        <FriendsList data={friends} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10
  }
})
