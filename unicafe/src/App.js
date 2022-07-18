import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])

  const avgPositive = good / all.length * 100
  const num1 = good - bad
  const avgScore = num1 / all.length

  const handleClickGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleClickBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }


  return (
    <>
    <h1>give feedback</h1>
    <Button handleClick={handleClickGood} text="good"/>
    <Button handleClick={handleClickNeutral} text="neutral"/>
    <Button handleClick={handleClickBad} text="bad"/>
    <h1>statistics</h1>
    <p>good {good} </p>
    <p>neutral {neutral} </p>
    <p>bad {bad} </p>
    <p>all {all.length}</p>
    <p>average {avgScore}</p>
    <p>positive {avgPositive} %</p>
    </>
  )
}

export default App;
