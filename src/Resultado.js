import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Resultado(props) {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#262626"
        translucent
      />
      <View style={styles.area}>
        <Image style={{ marginBottom: 4 }} source={require("./img/gas.png")} />
        <Text style={styles.texto}>
          {props.total < 0.7 ? (
            <Text style={styles.compensa}>Compensa usar Álcool</Text>
          ) : (
            <Text style={styles.naoCompensa}>Não compensa usar Álcool</Text>
          )}
        </Text>

        <Text style={styles.texto}>Com os preços:</Text>
        <Text style={styles.textoResultado}>Álcool: R$ {props.alcool}</Text>
        <Text style={styles.textoResultado}>Gasolina: R$ {props.gas}</Text>

        <TouchableOpacity style={styles.btn} onPress={props.fechar}>
          <Text style={{ color: "#f51111", fontSize: 24, fontWeight: "bold" }}>
            Calcular novamente
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292929",
    width: "100%",
  },
  texto: {
    paddingTop: 15,
    color: "white",
    fontSize: 28,
    textAlign: "center",
  },
  compensa: {
    color: "#00ff00",
    fontWeight: "bold",
  },
  naoCompensa: {
    color: "#ff0000",
    fontWeight: "bold",
  },
  btn: {
    borderWidth: 2,
    borderColor: "#f51111",
    width: 275,
    height: 45,
    margin: 28,
    backgroundColor: "transparent",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  textoPrecos: {
    paddingTop: 15,
    color: "white",
    fontSize: 22,
  },
  textoResultado: {
    paddingTop: 15,
    color: "white",
    fontSize: 18,
  },
});
