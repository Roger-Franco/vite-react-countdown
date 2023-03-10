import './App.css'
import Counter from './components/Counter'
import Title from './components/Title'

import ImgBackGround from './assets/ferias.jpg'
import useCountdown from './hooks/useCountdown'

function App() {
  const [day, hour, minute, second] = useCountdown("jan 1, 2023 00:00:00")
  console.log(day);

  return (
    <div className="App" style={{ backgroundImage: `url(${ImgBackGround})` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2023" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  )
}

export default App
