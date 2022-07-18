import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
    <>
    <h1>statistics</h1>
    <p>good {props.good} </p>
    <p>neutral {props.neutral} </p>
    <p>bad {props.bad} </p>
    <p>all {props.all.length}</p>
    <p>average {props.avgScore}</p>
    <p>positive {props.avgPositive} %</p>
    </>
  )
}

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
    <Statistics good={good}
                neutral={neutral}
                bad={bad} 
                all={all}
                avgScore={avgScore}
                avgPositive={avgPositive} />
    </>
  )
}

export default App;
