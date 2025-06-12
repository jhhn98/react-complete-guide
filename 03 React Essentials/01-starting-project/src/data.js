import componentsImg from './assets/components.png';
import jsxUIImg from './assets/jsx-ui.png';
import configImg from './assets/config.png';
import stateMgmtImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: 'Components',
        description: 'The core UI building block - compose the user interface by combining multiple components'
    },
    {
        image: jsxUIImg,
        title: 'JSX',
        description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
    },
    {
        image: configImg,
        title: 'Props',
        description: 'Make components configurable (and therefore reusable) by passing input data to them.'
    },
    {
        image: stateMgmtImg,
        title: 'State',
        description: 'React-managed data which, when changed, causes the component to re-render & the UI to update.'
    }
];