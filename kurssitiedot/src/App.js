const Header = ({course}) => {
  return (
    <>
      <h1>
        {course.name}
      </h1>
    </>
  )
}

const Content = ({course}) => {
  return (
    <>
      {course.parts.map(course => {
        return (
          <p key={course.name}>
            {course.name} {course.exercises}
          </p>
        )
      })}
    </>
  )
  }

const Total = ({course}) => {
  const sumCourse = course.parts.map(course => {
    return (
      course.exercises
    )
  })
  const [s1, s2, s3] = sumCourse
  const sumOf = [s1 + s2 + s3].reduce((a, b) => a + b, 0)

  return (
    <>
    <p>Number of exercises {sumOf}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}
  return (
    <>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}
export default App
