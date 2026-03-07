import '../styles/style.css'

export default function SecondaryButton({ text , onClick }) {
  return (
    <button className='secondary-btn' onClick={onClick}>
      {text}
    </button>
  )
}

