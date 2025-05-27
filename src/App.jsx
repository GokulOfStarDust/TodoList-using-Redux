import { useEffect } from 'react'
import TodoView from './features/TodoView'

function App() {

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', () => {
      console.log('👍 beforeinstallprompt fired');
    });
    
    // Clean up the listener when component unmounts
    return () => {
      window.removeEventListener('beforeinstallprompt', () => {
        console.log('👍 beforeinstallprompt fired');
      });
    };
  }, []);

  return (
    <>
    
      <TodoView/>
    </>
  )
}

export default App
