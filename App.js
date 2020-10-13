import React, {Component} from 'react';
import { View, StyleSheet, Text, Image,TouchableOpacity } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),

    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this); 

    this.frases = [

      'O bambu que se curva é mais forte que o carvalho que se resiste.',
      'Se não é certo, nao faça; Se não é verdade, não diga',
      'Meu celeiro foi destruido pelo fogo e agora posso ver a lua',
      'A reputação de mil anos pode ser determinada pelo comportamento de uma unica hora.',
      'É o tempo que determina o valor das coisas',
      'Os problemas são oportunidades para se mostrar o que sabe.',
      'O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido',
      'Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos',
      'Seja corajoso. Mesmo que você não seja, finja ser. Ninguém nota a diferença',
      'Não somos responsáveis apenas pelo que fazemos, mas também pelo que deixamos de fazer',
      'O talento vence jogos, mas só o trabalho em equipe vence campeonatos',
      'Um objetivo nada mais é do que um sonho com limite de tempo',
      'O mercado dita inovações. Quem não segue vira peça de museu',
      'O único lugar que o sucesso vem antes do trabalho é no dicionário',
      'Esforce-se para não ser um sucesso, mas sim para ser valioso',
      'Nunca é tarde demais para ser o que você poderia ter sido',
      'Não há saber mais ou saber menos: há saberes diferentes',
      'Quanto maior a dificuldade maior é o mérito de superá-la',
      'Certifique-se de que suas palavras e seus atos estão em harmonia',
      'As pessoas estão atentas a você. A qualidade está no seu coração',
      'Você pode mudar sem crescer, mas não pode crescer sem mudar'
    ];
  }

  quebraBiscoito(){

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    })

  }

  render(){
    return(

      <View style={styles.container}> 

      <Image 
      source={this.state.img}
      style={styles.img}
      />

      <Text style={styles.TextoFrase}> {this.state.textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}> Quebrar Biscoito </Text>
        </View>
      </TouchableOpacity>


      </View>

    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
   
  },

  img:{
    width: 250,
    height:250,
  },

  TextoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign:'center'
  },

  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    backgroundColor:'#FFD700',
  },

  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },

  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
    fontStyle: 'italic'

  }
})