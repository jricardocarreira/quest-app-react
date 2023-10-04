import './App.css';
import StyledText from './components/StyledText/index.js'
import AlertButton from './components/AlertButton/index.js'


function App() {
  return (
    <>
      <div>
        <h2>Primeira Quest</h2>
        <StyledText />
        <StyledText content='Outro texto com mesmo estilo'/>
        <StyledText color='#29b'/>
      </div>
      <div>
        <h2>Segunda Quest</h2>
        <AlertButton label='Baixar CV'/>
        <AlertButton label='Saiba mais'/>
        <AlertButton />
      </div>
    </>
  );
}

export default App;
