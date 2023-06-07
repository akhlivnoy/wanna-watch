## Styleguide

This doc details some stylistic / organizational rules we try to adhere to. These rules are things we can't automatically check for with eslint. If you have a rule, propose it in a PR!

### Separate absolute & relative imports

```js
import { View } from 'react-native';
import shuffle from 'lodash/shuffle';

import { MyComponent } from './MyComponent';
```

_Why?_ Visually separating import types makes it easier to reason about third party dependencies in a module.

### Separate imports & main code

```js
import { MyComponent } from './MyComponent';

export const NewComponent = () => {
  // component code
};
```

_Why?_ Visually separating main code structure makes it easier to read.

### Component file structure

```yaml
components/:
  MyComponent/:
    - index.ts
    - MyComponent.ts
    - MyComponent.data.ts # constats for internal component usage like items data for mapping etc.
    - MyComponent.types.ts # types or type mixins relevant for that component
    - MyComponent.dummy.ts # static / constants for props or state in lieu of a backend (temporary)
    - MyComponent.fixture.ts # constants for props or state for use in tests
```

_Why?_ For types, it's easy to know where to find them and it decouples any type imports / dependencies from the component module itself. For fixtures vs. dummy, it helps us understand the state of the component and whether the data is temporary for runtime use or long term for test use. The barrel file (`index.ts`) allows for a single export point for all things from these files relevant for external usage. You should default to only exporting the component itself, though. Re-exporting types may be a sign it should be moved somewhere more "common".

### Export style

We prefer named exports:

```js
export const MyComponent = () => {...}
```

This has the benefit of preventing accidental renaming of the component when it's imported, since default exports can be named however the importer likes. If the naming is consistent in declaration and use, it's easier to navigate the code base.

### Minimal index.ts / barrel files

index.ts files should only be used to re-export exports from sibling files in a directory (like in the component file structure case, above).

_Why?_ It's hard to know what kind of file an `index` file is. In most IDEs they're also harder to search for / distinguish in the "Find file" typeahead feature.

### Do not write inline arrow functions in JSX statements

```js
// Incorrect
<Foo
  onClick={function () {
    alert('1337');
  }}
/>;

// Correct
function onClick() {
  alert('1337');
}
<Foo onClick={onClick} />;

// Correct
const onClick = () => {
  alert('1337');
};
<Foo onClick={onClick} />;
```

_Why?_ It's hard to add some default functions / useCallback wrappers for them because we need stick one pattern for all functions inside components.
