# @loopmode/react-link

A thin wrapper around the `<a>` tag with two explicit goals:

-   allow usage of `javascript:` href
-   automatically add `rel="noopener noreferrer"` if target is `_blank`

## Installation

```
yarn add @loopmode/react-link
```

```
npm install --save @loopmode/react-link
```

## Usage

```jsx
import A from "@loopmode/react-link";

function MyComponent() {
    return (
        <>
            <A href="javascript: (function() {window.console.log('clicked')}())">
                exec javascript function
            </A>
            <A href="http://www.github.com" target="_blank">
                open in new window
            </A>
        </>
    );
}
```
