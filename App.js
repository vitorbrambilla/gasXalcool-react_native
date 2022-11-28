import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Resultado from "./src/Resultado";

export default function App() {
  const [gas, setGas] = useState("");
  const [alcool, setAlcool] = useState("");
  const [total, setTotal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function handleResultado() {
    if (!alcool.trim() || !gas.trim()) {
      setModalVisible(false);

      alert("Prencha todas as informações!");
    } else {
      setModalVisible(true);

      const totalCalculo = alcool / gas;

      setTotal(totalCalculo);
    }
  }

  function handleSair(visible) {
    setModalVisible(visible);

    setAlcool("");
    setGas("");
  }

  return (
    <ScrollView style={styles.scrollView}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#262626"
        translucent
      />

      <View style={styles.container}>
        <View style={styles.areaApp}>
          <View style={styles.areaLogo}>
            <Image
              style={{ marginBottom: 4 }}
              source={require("./src/img/logo.png")}
            />

            <Text style={styles.textLogo}>Qual a melhor opção?</Text>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "height" : "padding"}
            style={styles.areaInputs}
          >
            <View>
              <Text style={styles.textAreaInput}>
                Álcool (preço por litro):
              </Text>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={setAlcool}
                value={
                  Platform.OS === "android" ? alcool : alcool.replace(",", ".")
                }
                maxLength={4}
              />

              <Text style={styles.textAreaInput}>
                Gasolina (preço por litro):
              </Text>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={setGas}
                value={Platform.OS === "android" ? gas : gas.replace(",", ".")}
                maxLength={4}
              />

              <TouchableOpacity style={styles.btn} onPress={handleResultado}>
                <Text style={styles.textLogo}>Calcular</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>

        <Modal transparent={true} animationType="slide" visible={modalVisible}>
          <View style={styles.modal}>
            <Resultado
              fechar={() => handleSair(false)}
              total={Number(total).toFixed(2).replace(",", ".")}
              alcool={alcool}
              gas={gas}
            />
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#262626",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#262626",
    width: "100%",
    paddingVertical: 30,
  },
  areaApp: {
    flex: 1,
    justifyContent: "center",
  },
  areaLogo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  textLogo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  areaInputs: {
    flex: 1,
  },
  textAreaInput: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 14,
  },
  textInput: {
    fontSize: 18,
    height: 38,
    margin: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  btn: {
    height: 40,
    margin: 12,
    backgroundColor: "#f51111",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
