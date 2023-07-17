import { useState } from 'react'

// Cool! We must have a way now to ask GitHub for the details of a single username. We'll do so using a `Form` component, where we manage our own state (`username`), and we ask GitHub for information about a user using their public APIs, using the Fetch API.

// Let's create a new `Form` component in `src/components/Form.jsx`:
function Form(props) {
  const [username, setUsername] = useState('')

//   The `fetch()` function returns a promise, so we use `await` to wait for that to resolve.
// The same for the `.json()` method on the response.
// So we must set `handleSubmit()` as an async function:
  async function handleSubmit(event) {
    event.preventDefault() //we  call event.preventDefault() to avoid the browser submitting the form to the server (which is the default behavior) and we use the Fetch API to get the person's information from GitHub.

    const response = await fetch(`https://api.github.com/users/${username}`)
    if (response.status === 200) {
      const data = await response.json()
      props.onSubmit(data) //we call the onSubmit prop, which is passed to us by the App component
      setUsername('') //reset the username

    } else {
      alert('Username not found')
    }
  }

  return (
    // Our form will hosts a single input element, and a button. Let's add them to the JSX, adding some Tailwind CSS styling
    //Next, we handle the form submit event, which is emitted when the user clicks the "Search" button, automatically because the button is `type="submit"`.
    // We add an `onSubmit` attribute to the form, and we attach an `handleSubmit` function callback:
    <form className='w-full max-w-sm mx-auto' onSubmit={handleSubmit}>
      <div className='flex mt-10'>
        <input
          name='username'
          required
        //We make the form handle a piece of state called `username`.
        // When the username is updated, we are notified in the `onChange()` event callback. In there, we update the username value by calling`setUsername()`:
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        />
        <button
          type='submit'
          className='px-3 py-2 ml-2 text-sm font-medium leading-4 text-gray-700 border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'>
          Search
        </button>
      </div>
    </form>
  )
}

// To recap, when you enter a name in the `input` field managed by the **Form** component, this name is *bound to its state*.

// When *Add card* is pressed, the input form is cleared by clearing the `userName` state of the **Form** component.

// When the form is submitted we call the `handleSubmit` event, and after the network call, we call `props.onSubmit` passing the parent (`App`) the data we got from GitHub.

export default Form