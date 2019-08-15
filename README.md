# @loopmode/react-link

A thin wrapper around the `<a>` tag that allows usage of `javascript:` href.

Currently, React allows this but already prints a deprecation message: `Warning: A future version of React will block javascript: URLs as a security precaution.`
(see [PR 15047](https://github.com/facebook/react/pull/15047))

## Motivation

My original use-case is to render bookmarklets in a react app: Links or buttons users can drag into their browser bookmarks bar. When clicked, these bookmarklets shouldn't navigate; instead, they should execute some function on the current page.

## Installation

```
yarn add @loopmode/react-link
```

```
npm install --save @loopmode/react-link
```

## Usage

Please note that if you're using ESLint, you may still get warnings from the `no-script-url` rule.
There are various ways to disable it, for example you could disable the rule at the top of the file that defines the script url.

```jsx
/* eslint-disable no-script-url */
import React from "react";
import Link from "@loopmode/react-link";

export default function MyBookmarklet() {
    return (
        <Link href="javascript: (function() {window.console.log('clicked')}())">
            exec javascript function
        </Link>
    );
}
```
