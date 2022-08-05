
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

export default Course