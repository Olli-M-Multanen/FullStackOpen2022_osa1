import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <>
  <p>{props.text} {props.value}</p>
  </>
)

const Statistics = (props) => {
  if (props.all.length == 0) {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
    <StatisticLine text="good" value ={props.good} />
    <StatisticLine text="neutral" value ={props.neutral} />
    <StatisticLine text="bad" value ={props.bad} />
    <StatisticLine text="all" value ={props.all.length} />
    <StatisticLine text="average" value ={props.avgScore} />
    <StatisticLine text="positive" value ={props.avgPositive}/>
    </>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])

  const avgPositive = good / all.length * 100 + " %"
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
