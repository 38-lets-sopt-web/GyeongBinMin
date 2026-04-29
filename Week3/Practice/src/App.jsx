import Card from './components/Card.jsx'
import Header from './components/Header.jsx'
import { members } from './member.js'
function App() {
  return (
    <>
      <Header />
      {members.map((member) => (
        <Card key={member.id} member={member} />
      ))}
    </>
  );
}

export default App;