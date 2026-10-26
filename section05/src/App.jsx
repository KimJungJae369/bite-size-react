import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// App 컴포넌트(Component) : 부모 컴포넌트 = 루트 컴포넌트
function App() { 
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <h1>Hello React</h1>
    </>
  )
}

export default App
/*
  컴포넌트(Component)
  - HTML 태그들을 반환하는 함수를 '컴포넌트(Component)'라고 한다
  - 컴포넌트(Component)는 함수의 이름을 따서 이름을 부른다
  - 함수 이름에 첫 글자는 대문자로 작성 그렇지 않고 소문자로만 적으면 내부적으로 함수를 컴포넌트라고 인정하지 않는다
*/
