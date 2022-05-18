import { useRef } from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }

    props.onAddMeetup(meetupData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input id='title' type='text' ref={titleInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image</label>
          <input id='image' type='url' ref={imageInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input id='address' type='text' ref={addressInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            rows='5'
            ref={descriptionInputRef}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm