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
    <Part course={course} />
    </>
  )
}

const Part = ({course}) => {
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

const Course = ({course}) => {

  return (
    <>
    <Header course={course} />
    <Content course={course} />
    </>
  )

  }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    }
  ]
}

return (
  <>
    <Course course={course} />
  </>
)

}
export default App
