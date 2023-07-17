// Restart the app with npm run dev and you should be seeing the text in blue because we added the text-blue-500 class

// Now we can import the Form component into the App component, the main component of the application

// Remember that in the Form component, we require a `onSubmit` prop. We must pass a function to this prop so that we can add the new card to the list of cards.

// Where is the list of cards maintained? In the App component state.

// So we first include useState, so we can use hooks, and we call it to generate the array of cards. We initialize the state property to `[]`, an empty array.

// We add it to `App`, passing a method to add a new card to the list of cards, `addNewCard`, as its `onSubmit` prop:
import { useState } from 'react'
import Form from './components/Form'
import CardList from './components/CardList'

function App() {
  const [cards, setCards] = useState([])

  // When addNewCard is called, we are getting the information in its only parameter, card. We can call setCards(), passing a new array of cards that concatenates the old card's data, and the new card:
  const addNewCard = (card) => {
    setCards([...cards, card])
  }

  return (
    <div>
      <h1 className='pt-10 mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900'>
        Search a GitHub User
      </h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default App