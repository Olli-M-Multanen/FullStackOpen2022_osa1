const Total = (source) => {
  const total = source.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises, 0)

  return <p>
    <b>total of {total} exercises</b>
    </p>
}


// Render nested array using map()

const Part = ({course}) => {
  return (
    // 1 - map courses ARRAY to variable "course"
    //   - this gives access to "first level" of the Courses array.
    //   - must specify div key
    //     now you can access "parts" or "second level" of each objects
    // 2 - map "parts" to variable "data"
    //   - must again use div key
    <>
    {course.map((course) => {
      return (
        <div key={course.id}>
          <h2>{course.name}</h2>

          {course.parts.map((data) => {
            return (
              <div key={data.id}>
                <p>{data.name} {data.exercises}</p>
              </div>
            )
          }
          )}
          <Total parts={course.parts}/>
        </div>
      )
    })}
    </>
  )
}

const Content = ({ course }) => {
  return (
    <>
    <Part course = {course} />
    </>
  )
}

const Header = () => {
  return (
    <>
    <h1>Web development curriculum</h1>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <>
    <Header />
    <Content course={course} />
    </>
  )
  }

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

return (
  <>
    <Course course={courses}/>
  </>
)

}
export default App
