import Profile from './profile/profile';
import './App.css';


function App() {
  const fullName ="wajdi Guesmi"
    const bio="I'm learning Full Stack Js in GoMyCode"
    const profession="Full Stack Developer"
  function handleName(){
    alert(`${fullName}`)
  }
  return (
    <div className="App">
      <Profile fullName ={fullName}
                bio={bio}
                profession={profession}
                handleName={handleName}>
        <img style={{width:'500px', border:'2px solid white',marginTop:'50px',marginLeft:'50px'}} 
        src ="./djoko.jpg" alt='djoko picture'/>
     </Profile>
    </div>
  );
}

export default App;