import Task from "../components/Task";
import ScoreBoard from "../components/ScoreBoard";
import ShakeInput from "../components/ShakeInput";
import useTaskGenerator from "../hooks/useTaskGenerator";



export default function GameScreen({ route, navigation }) {
  const { difficulty } = route.params;
  const { randomNumber1, randomNumber2, operator, randomOperator, generateRandomNumber } = useTaskGenerator(difficulty);

  const [textValue, setTextValue] = useState("");
  const [error, setError] = useState(false);
  const [oikein, setOikein] = useState(0);
  const [vaarin, setVaarin] = useState(0);

  useEffect(() => {
    generateRandomNumber();
  }, [difficulty]);

  const checkAnswer = () => {
    const answer = parseInt(textValue);
    let correct = false;

    if (randomOperator === 1) correct = randomNumber1 + randomNumber2 === answer;
    else if (randomOperator === 2) correct = randomNumber1 - randomNumber2 === answer;
    else if (randomOperator === 3) correct = randomNumber1 * randomNumber2 === answer;
    else if (randomOperator === 4) correct = randomNumber1 / randomNumber2 === answer;

    if (correct) {
      setOikein(oikein + 1);
      setError(false);
      generateRandomNumber();
    } else {
      setVaarin(vaarin + 1);
      setError(true);
    }
    setTextValue("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laske seuraava</Text>

      <Task number1={randomNumber1} operator={operator} number2={randomNumber2} />
      <ShakeInput value={textValue} setValue={setTextValue} error={error} />

      <TouchableOpacity style={styles.button} onPress={checkAnswer}>
        <Text style={styles.buttonText}>Tarkista vastaus</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => {
          generateRandomNumber();
          setError(false);
          setTextValue("");
        }}
      >
        <Text style={styles.buttonText}>Uusi tehtävä</Text>
      </TouchableOpacity>

      <ScoreBoard oikein={oikein} vaarin={vaarin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: "20%", // подняли содержимое выше
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonSecondary: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
