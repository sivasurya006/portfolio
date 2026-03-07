import '../styles/style.css'

export default function PrimaryButton({ text , onClick }) {
  return (
    <button className="primary-btn" onClick={onClick}>
        {text}
    </button>
  )
}

