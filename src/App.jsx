import { Layout } from 'antd';
import { BrowserRouter, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Pages from './components/Pages';
import DictLoader from './components/DictLoader';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

const store = ConfigureStore();

function App() {
  return (
    <>
      <Provider store={store}>
          <DictLoader/>
          <BrowserRouter>
            <Layout style={{minHeight: '100vh'}}>
              <Navigation/>
              <Pages/>
            </Layout>
          </BrowserRouter>
      </Provider>
      
    </>
  )
}

export default App;
