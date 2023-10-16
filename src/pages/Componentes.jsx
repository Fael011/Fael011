import React from 'react'

import Header  from '../components/Header'
import style from './Componentes.module.css'

import imgArduino from '../images/ARDUINO.png'
import imgPeltier from '../images/PELTIER.png'
import imgDht from '../images/DHT11.png'
import imgRele from '../images/RELE.png'
import imgPilhas from '../images/PILHAS.png'
import imgLCD from '../images/LCD.png'

function Componentes() {
  return (
    <>
     <Header />
     
     <main>
        <section>
            <div className={style.conteinerComponents}>
                <div className={style.titleComponents}>
                    <h2 className={style.titleBlue}>ARDUINO</h2>
                </div>

                <div className={style.imgComponents}>
                    <img src={imgArduino}/>
                </div>

                <div className={style.textBlue}>
                    <h3>Para que serve ?</h3>
                    <p>O Arduino é uma plataforma de hardware de código aberto que consiste em uma placa com um microcontrolador e um ambiente de desenvolvimento integrado (IDE) que permite programar e controlar dispositivos eletrônicos. O Arduino é amplamente utilizado por entusiastas, estudantes e profissionais para uma variedade de aplicações.O Arduino é uma plataforma de hardware de código aberto que consiste em uma placa com um microcontrolador e um ambiente de desenvolvimento integrado (IDE) que permite programar e controlar dispositivos eletrônicos. O Arduino é amplamente utilizado por entusiastas, estudantes e profissionais para uma variedade de aplicações.</p>
                    <h3>Como usamos ?</h3>
                    <p>O arduino UNO é basicamente o componente mais importante para o funcionamento do projeto, já que ele é o componente que vai ler todo o código e "passar" as funções que cada componente deverá exercer. Sem ele, seria inviável fazer o projeto desssa forma.</p>
                </div>
            </div>

            <div className={style.conteinerComponents}>
                <div className={style.titleComponents}>
                    <h2 className={style.titleWhite}>PASTILHA PELTIER</h2>
                </div>

                <div className={style.imgComponents}>
                    <img src={imgPeltier}/>
                </div>

                <div className={style.textWhite}>
                    <h3>Para que serve ?</h3>
                    <p>As pastilhas Peltier, também conhecidas como módulos Peltier, são dispositivos termoelétricos que possuem uma variedade de aplicações, sendo projetadas para realizar transferência de calor entre duas superfícies. Essas pastilhas são construídas com material semicondutor e funcionam com base no efeito Peltier, que é a capacidade de absorver ou liberar calor quando uma corrente elétrica é aplicada a elas.</p>
                    <h3>Como usamos ?</h3>
                    <p>A pastilha é um dos componentes mais importantes desse projeto, pois ela nos possibilita esquentar e conservar a comida do usuário, ja que a pastilha, quando ligada, ela tem o poder de esfriar e esquentar ao mesmo tempo. Colocamos ela no fundo da marmita para que assim que acionada, ela possa cumprir suas funções (conservar e esquentar).</p>
                </div>
            </div>

            <div className={style.conteinerComponents}>
                <div className={style.titleComponents}>
                    <h2 className={style.titleBlue}>LCD 16x2</h2>
                </div>

                <div className={style.imgComponents}>
                    <img src={imgLCD}/>
                </div>

                <div className={style.textBlue}>
                    <h3>Para que serve ?</h3>
                    <p>Um LCD 16x2, abreviação de "Liquid Crystal Display 16x2", é um tipo de tela de cristal líquido (LCD) que consiste em 16 colunas e 2 linhas de caracteres alfanuméricos. Cada "16x2" refere-se ao número de caracteres que a tela pode exibir em cada linha e ao número total de linhas de texto.</p>
                    <h3>Como usamos ?</h3>
                    <p>O LCD 16x2 foi utilizado em nosso projeto fornecer ao usuário, algumas informações sobre a situação de sua comida, como: se ela esta sendo conservada ou esquentada, qual a temperatura dentro da marmita, a temperatura que o usuário esta selecionando, entre outras.</p>
                </div>
            </div>

            <div className={style.conteinerComponents}>
                <div className={style.titleComponents}>
                    <h2 className={style.titleWhite}>RELÉ</h2>
                </div>

                <div className={style.imgComponents}>
                    <img src={imgRele}/>
                </div>

                <div className={style.textWhite}>
                    <h3>Para que serve ?</h3>
                    <p>O relé (ou relê) é um dispositivo frequentemente usado com o Arduino e outros sistemas de controle para controlar cargas elétricas de maior potência, como luzes, motores, eletrodomésticos, equipamentos industriais e outros dispositivos que requerem mais corrente ou tensão do que um microcontrolador como o Arduino pode fornecer diretamente. O relé do Arduino serve para realizar a comutação (abertura ou fechamento) de circuitos elétricos externos.</p>
                    <h3>Como usamos ?</h3>
                    <p></p>
                </div>
            </div>

            <div className={style.conteinerComponents}>
                <div className={style.titleComponents}>
                    <h2 className={style.titleBlue}>DHT-11</h2>
                </div>

                <div className={style.imgComponents}>
                    <img src={imgDht}/>
                </div>

                <div className={style.textBlue}>
                    <h3>Para que serve ?</h3>
                    <p>O sensor DHT11 é um sensor de temperatura e umidade que é amplamente utilizado em projetos de eletrônica e automação residencial. Ele serve para medir a temperatura ambiente e a umidade relativa do ar e é particularmente útil em situações em que o controle desses parâmetros é importante.</p>
                    <h3>Como usamos ?</h3>
                    <p>Utilizamos o sensor de temperatura DHT-11 para medir a temperatura dentro da marmita. Tendo o valor da temperatura em mãos, pegamos esse valor e fizemos algumas contas para que assim o arduíno saiba o momento de conservar e o momento de esquentar, além de imprimir o valor da temperatura ao usuário.</p>
                </div>
            </div>

            <div className={style.conteinerComponents}>
                <div className={style.titleComponents}>
                    <h2 className={style.titleWhite}>PILHAS</h2>
                </div>

                <div className={style.imgComponents}>
                    <img src={imgPilhas}/>
                </div>

                <div className={style.textWhite}>
                    <h3>Para que serve ?</h3>
                    <p>As pilhas são dispositivos que servem para fornecer energia elétrica a dispositivos eletrônicos e elétricos. Elas convertem energia química em energia elétrica por meio de uma reação química interna. As pilhas desempenham um papel fundamental em nossas vidas cotidianas e são utilizadas para uma variedade de finalidades.</p>
                    <h3>Como usamos ?</h3>
                    <p>Como nossa marmita não precisa ser colocada na tomada, a fonte de energia escolhida para o funcionamento do arduíno e das pastilhas peltier, foi as pilhas. Com elas o usuário tem a possibilidade de recarrega-las, para que assim, não tenha um limite estabelecido para o uso do produto. </p>
                </div>
            </div>

        </section>
     </main>
    </>
  )
}

export default Componentes