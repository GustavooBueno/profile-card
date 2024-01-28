import Profile from "./components/Profile";
import profileImg from "./assets/profile.jpeg"

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={profileImg}
        name="Gustavo Bueno"
        bio="FullStack Developer"
        email="gustavo.ibis.gb@gmail.com"
        phone="+5519993626264"
        githubUrl="https://github.com/GustavooBueno"
        linkedinUrl="https://www.linkedin.com/in/gustavo-buenoo/"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}