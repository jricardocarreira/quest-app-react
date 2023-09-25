import './App.css';
import Paragraph from './components/paragraph/paragraph.js'
import Button from './components/button/button.js'


function App() {
  return (
    <>
      <div>
        <h2>Primeira Quest</h2>
        <Paragraph />
        <Paragraph content='Outro texto com mesmo estilo'/>
        <Paragraph color='#29b'/>
      </div>
      <div>
        <h2>Segunda Quest</h2>
        <Button label='Baixar CV'/>
        <Button label='Saiba mais'/>
        <Button />
      </div>
    </>
  );
}

export default App;
