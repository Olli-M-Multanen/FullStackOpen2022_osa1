const Header = ({course}) => {
  return (
    <>
      <h1>
        {course}
      </h1>
    </>
  )
}

const Content = ({parts}) => {
  const partsList = parts.map((part) =>
  <p>{part.name} {part.exercises}</p>)

    return (
      <>
        {partsList}
      </>
    )   
  }




const Total = ({parts}) => {
  const [n1, n2, n3] = parts
  const sumOf = [n1.exercises + n2.exercises + n3.exercises].reduce((a, b) => a + b, 0)
  return (
    <>
      <p>Number of exercises {sumOf}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of the component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
  )
}

export default App
