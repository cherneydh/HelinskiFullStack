const Header = (props) => {
  return (
    <h1>{props.course_name}</h1>
  )
}

const Content = (props) => {
  let data = null
  console.log(props)
  return (
    <div>
    <Part name={props.parts[0].name} number={props.parts[0].exercises} />
    <Part name={props.parts[1].name} number={props.parts[1].exercises} />
    <Part name={props.parts[2].name} number={props.parts[2].exercises} />
    </div>
    )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.name} {props.number}</p>
  )
}

const Footer = (props) => {
  let sum = 0
  props.parts.forEach(value => {
    sum += value.exercises
    })
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const parts = [part1,part2,part3]

  return (
    <div>
      <Header course_name={course}/>
      <Content parts={parts} />
      <Footer parts={parts} />
    </div>
  )
}

export default App