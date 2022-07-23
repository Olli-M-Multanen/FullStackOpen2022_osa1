import {useState} from 'react';


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const AnecdoteContent = ({data, selected}) => {
  const arr = data
  let quote = arr.find(obj => {
    return obj.id === Number(selected)
  },
  )

  return (
    <>
    <h1>Anecdote of the day</h1>
    <p>{quote.anecdote} <br></br>has {quote.votes} votes</p>
    </>
  )
}

const MostPopular = ({data}) => {
  const arr = data

  const maxVotes = Math.max(...arr.map(obj => obj.votes))


  const result = arr.find(obj => {
    return obj.votes === maxVotes
  })

  return (
    <>
    <h1>Anecdote with most votes</h1>
    <p>{result.anecdote} <br></br> has {result.votes} votes</p>
    </>
  )

}

const App = () => {
  const initialState = [
    {id: 0, anecdote: 'If it hurts, do it more often.', votes: 0},
    {id: 1, anecdote: 'Adding manpower to a late software project makes it later!', votes: 0},
    {id: 2, anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
    {id: 3, anecdote: 'If it hurts, do it more often.', votes: 0},
    {id: 4, anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
    {id: 5, anecdote: 'Premature optimization is the root of all evil.', votes: 0},
    {id: 6, anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0},
    {id: 7, anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.', votes: 0},
  ];


  const [data, setData] = useState(initialState);
  const [selected, setSelected] = useState(0)

  
  const handleClick = () => {
    setSelected([Math.floor(Math.random()*initialState.length)])
  }

  const updateVote = () => {
    const index = Number(selected)
    const newState = data.map(obj => {
      // if id equals index, update mostVotes property
      if (obj.id === index) {
        return {...obj, votes: Number(obj.votes) +1};
      }

      // otherwise return object as is
      return obj;
    });

    setData(newState);
    setSelected(selected)
  };

  return (
    <div>
      <AnecdoteContent data={data} selected={selected}/>
      <Button handleClick={updateVote} text="vote" />
      <Button handleClick={handleClick} text={"next anecdote"} />
      <MostPopular data={data}/>
    </div>
  );
};



export default App;
