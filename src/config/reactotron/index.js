/**
 * Configuração do Reactotron para fins de debug
 *
 * @author Dot.Lib <vlamir.santo@dotlib.com.br>
 * @since 23/02/2018
 */
import Reactotron from 'reactotron-react-native';

const tron = Reactotron.configure().useReactNative().connect();

tron.clear(); // Limpa a tela do Reactotron a cada reload

console.tron = tron;
