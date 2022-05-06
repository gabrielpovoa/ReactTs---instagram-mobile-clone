import './App.css'
import HighlightItem from './component/Highlightitem';
import PostsItem from './component/Routes';
import Header from './pages/Header';

const App = () => {
  return <>
    <Header />
    <HighlightItem />
    <PostsItem />
  </>
}

export default App;