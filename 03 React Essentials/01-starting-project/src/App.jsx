import { useState } from 'react';
import {CORE_CONCEPTS, EXAMPLES} from "./data.js";
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
    const [ selectedTopic, setSelectedTopic ] = useState();
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        //console.log(selectedTopic);
    }
    console.log('APP COMPONENT EXECUTING');

    {/*조건출력문 방법3 component 함수에서 변수에 저장하여 선언할 수도 있다.*/}
    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
                        {/*<CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>*/}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {/*<TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>*/}
                        {CORE_CONCEPTS.map((concept) => (
                            <TabButton
                                key={concept.title}
                                isSelected={selectedTopic === concept.title.toLowerCase()}
                                onSelect={() => handleSelect(concept.title.toLowerCase())}
                            >
                                {concept.title}
                            </TabButton>
                        ))}
                    </menu>
                    {/*
                    조건출력문 방법1
                    {!selectedTopic ? <p>Please select a topic.</p> : null}
                    {selectedTopic ? (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    ) : null}
                    {!selectedTopic ? <p>Please select a topic.</p> : (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )}
                    */}
                    {/*
                    조건출력문 방법2 - && 기호를 사용함으로써 : null 구문을 생략할 수 있다.
                    {!selectedTopic && <p>Please select a topic.</p>}
                    {selectedTopic && (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )}
                    */}
                    {/*조건출력문 방법3 component 함수에서 변수에 저장하여 선언할 수도 있다. line : 16*/}
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
