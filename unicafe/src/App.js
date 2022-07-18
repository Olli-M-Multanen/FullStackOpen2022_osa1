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

  const handleClickGood = () => {
    console.log("click Good")
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    console.log("click Neutral")
    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {
    console.log("click Bad")
    setBad(bad + 1)
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
    </>
  )
}

export default App;
