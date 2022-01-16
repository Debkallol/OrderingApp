//import useSWR from 'swr'
import dbConnect from '../../../utils/dbConnect';
dbConnect();

// const fetcher = (url) => fetch(url).then((res) => res.text())

// export default function Index() {
//   const { data, error } = useSWR('/api/cookies', fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

//   return <div>{`Cookie from response: "${data}"`}</div>
// }



export default function Form() {
    const registerUser = async event => {
      event.preventDefault()
  
      const res = await fetch('/api/notes', {
        body: JSON.stringify({
          name: event.target.name.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      
  
      const result = await res.json()
      // result.user => 'Ada Lovelace'
    }
  
    return (
      <form onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <button type="submit">Register</button>
      </form>
    )
  }
