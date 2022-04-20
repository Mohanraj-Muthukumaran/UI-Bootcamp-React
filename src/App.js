import './App.css';
import PageElement from './components/PageElement'

function App() {

  const pageElements = [
    {
      htmlElementName: 'h1',
      innerHTML: 'Hello World!',
      attributes: {
        id: 'hello',
        name: 'hello'
      },
      style: {
        border: '1px solid blue',
        backgroundColor: '#edeff2',
        color: '#4d4d4d',
      },
    },
    {
      htmlElementName: 'p',
      innerHTML: 'Rendering HTML elements from the object',
      attributes: {
        id: 'description',
        name: 'description',
      },
      style: {
        border: '1px solid green',
        backgroundColor: 'yellow',
        color: '#4d4d4d',
      },
    },
    {
      htmlElementName: 'button',
      innerHTML: 'Submit!',
      attributes: {
        id: 'submit',
        name: 'submit',
        onClick: () =>{
          alert('Submitted successfully');
        }
      },
      style: {
        color: 'red',
      },
    }
  ];

  const renderElements = (elementsToBeRendered) => {
      
      const renderedElements = [];
      for(let i in elementsToBeRendered){
          renderedElements.push(
            <PageElement key={i} {...elementsToBeRendered[i]}></PageElement>
          )
      }

      return renderedElements;
  }

  return (
    <div className="App">
        { renderElements(pageElements) }
    </div>
  );
}

export default App;
