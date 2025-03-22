import { Link } from "react-router-dom"

export const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/second">Go to second page</Link>
    </div>
  )
}
