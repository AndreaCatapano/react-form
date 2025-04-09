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

  const [articlesItems, setArticles] = useState(articles)
  let [newArticle, setNewArticle] = useState('')


  const articleSubmitt = (event) => {
    event.preventDefault();


    if (newArticle.trim() === '') return console.error("Non sono stati inseriti dati");

    const newArticleObject = {
      id: Math.max(...articlesItems.map(article => article.id)) + 1,
      title: newArticle
    };


    setArticles([...articlesItems, newArticleObject]);
    setNewArticle('');
  }

  return (
    <>
      <ul>
        {articlesItems.map(article => (
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
