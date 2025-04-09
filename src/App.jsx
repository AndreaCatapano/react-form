import { use, useState } from 'react'
import './App.css'


const articles = [
  {
    id: 1,
    title: "Prova 1"
  },
  {
    id: 2,
    title: "Prova 2"
  },
  {
    id: 3,
    title: "Prova 3"
  },
  {
    id: 4,
    title: "Prova 4"
  },
  {
    id: 5,
    title: "Prova 5"
  }
]

function App() {

  const [newArticle, setNewArticle] = useState('')


  const articleSubmitt = (event) => {
    event.preventDefault();
    console.log("Tasto premuto")
  }

  return (
    <>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>

      <form onSubmit={articleSubmitt}>
        <input type="text"
          value={newArticle}
          onChange={(e => setNewArticle(e.target.value))} />
        <button>Invia</button>
      </form>


    </>
  )
}

export default App
