import ReactDOM from "react-dom"

interface Props {
  children: React.ReactNode
}
function Portal({ children }: Props) {
  if (typeof window === 'undefined') {
    return null
  }

  const elem = document?.querySelector('#portal')

  return ReactDOM.createPortal(
    children,
    elem,
  )
}

export default Portal
