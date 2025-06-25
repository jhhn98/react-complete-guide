import {Fragment, useState} from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

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
        <Section title="Examples" id="examples">
            {/* buttonsContainer 값을 받을때 텍스트 형식으로 받을 수도 있고 {Section}과 같이 컴포넌트 함수를 받을 수도 있다. 단 중괄호 사이에 반드시 함수 이름만 넣어야 한다. */}
            <Tabs buttons={
                <Fragment>
                    {CORE_CONCEPTS.map((concept) => (
                        <TabButton
                            key={concept.title}
                            isSelected={selectedTopic === concept.title.toLowerCase()}
                            onClick={() => handleSelect(concept.title.toLowerCase())}
                        >
                            {concept.title}
                        </TabButton>
                    ))}
                </Fragment>
            }>
                {tabContent}
            </Tabs>
            {/*<menu>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                {CORE_CONCEPTS.map((concept) => (
                    <TabButton
                        key={concept.title}
                        isSelected={selectedTopic === concept.title.toLowerCase()}
                        onClick={() => handleSelect(concept.title.toLowerCase())}
                    >
                        {concept.title}
                    </TabButton>
                ))}
            </menu>*/}
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
        </Section>
    );
}