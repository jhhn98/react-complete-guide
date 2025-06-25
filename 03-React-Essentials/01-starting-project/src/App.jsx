import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from "./components/Examples.jsx";


function App() {

    return (
        <Fragment>{/* 하나의 부모 요소만 반환할 수 있기때문에 div 태그로 아래 컴포넌트들을 감싸야하는데 그렇게 되면 렌더링 후 불필요한 div 태그가 생기게 됨. div 태그 대신 Fragment로 감싸게 되면 렌더링후엔 #root 바로 아래에 컴포넌트들이 들어가게 된다. 다른 대안으로 '<></>' 방법이 있다. */}
            <Header/>
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </Fragment>
    );
}

export default App;
