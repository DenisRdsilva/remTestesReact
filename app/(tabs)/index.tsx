import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isNotEmpty = (valor: String) => {
    if (valor.length > 0) {
      return true
    }
    return false
  }

  const enviarDados = () => {
    if (isNotEmpty(name) && isNotEmpty(login) && isNotEmpty(password)) {
      alert("Usuário criado com sucesso")
    } else {
      if (password == confirmPassword) {
        alert("Algum dado não foi informado")
      }
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source='https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/eventos/evento-178252-banner.jpeg'
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">REM-NE</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.box}>
          <label>
            Nome
          </label>
          <input style={styles.input} onChange={(e) => setName(e.target.value)} name="nome" value={name} />

          <label>
            Login</label>
          <input style={styles.input} onChange={(e) => setLogin(e.target.value)} name="login" value={login} />

          <label>
            Senha</label>
          <input style={styles.input} onChange={(e) => setPassword(e.target.value)} name="senha" value={password} />

          <label>
            Confirmar</label>
          <input style={styles.input} onChange={(e) => setConfirmPassword(e.target.value)} name="confirmarSenha" value={confirmPassword} />
          <button onClick={() => enviarDados()}>
            Enviar
          </button>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView >
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    height: 30,
    fontSize: 14,
    width: '90%',
    marginBottom: 20,
    borderBlockColor: 'black'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    width: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
  },
  box: {
    width: 500,
    height: 400,
    paddingTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: "10%"
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    textAlign: 'center',
    position: 'absolute',
  },
});
