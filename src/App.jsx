import { use, useState } from 'react'
import './App.css'

// Data

import articles from './data/articles.js'

function App() {

  const [articlesItems, setArticles] = useState(articles);
  let [newArticle, setNewArticle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');


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

  const articleDelete = (id) => {
    const updupdatedArticlesateArticles = articlesItems.filter(article => article.id !== id)
    setArticles(updatedArticles);
  }


  // Apre la sezione di modifica
  const articleModify = (id, title) => {
    setEditingId(id);
    setEditingText(title);
  }


  // Chiude la sezione di modifica
  const closeModify = () => {
    setEditingId(null);
    setEditingText('');
  }


  const saveModification = () => {
    const updatedArticles = articlesItems.map(article =>
      article.id === editingId ? { ...article, title: editingText } : article
    );

    setArticles(updatedArticles);
    closeModify();

  }

  const cancelModification = () => {
    closeModify();
  }


  return (
    <>
      <ul>
        {articlesItems.map(article => (
          <li key={article.id}>
            {editingId === article.id ? (
              // Modalità modifica
              <div>
                <input
                  type="text"
                  value={editingText}
                  onChange={e => setEditingText(e.target.value)}
                  autoFocus
                />
                <button onClick={saveModification}>Salva</button>
                <button onClick={cancelModification}>Annulla</button>
              </div>
            ) : (
              // Visualizzazione normale
              <div>
                {article.title}
                <button onClick={() => articleDelete(article.id)}>
                  <i className="fa-solid fa-skull-crossbones"></i>
                </button>
                <button onClick={() => articleModify(article.id, article.title)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </div>
            )}
          </li>
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
