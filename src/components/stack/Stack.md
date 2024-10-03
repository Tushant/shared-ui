### Basic Usage
The `HorizontalStack` and `VerticalStack` components can be used to manage one-dimensional layout of immediate children.
Spacing between children can be adjusted using the responsive `gap` prop.

```jsx inside Markdown
import {HorizontalStack} from './Stack';
```

```jsx inside Markdown
<HorizontalStack flexDirection="column" gap="XL">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</HorizontalStack>
```

```jsx inside Markdown
<HorizontalStack flexDirection="row" gap="XL">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</HorizontalStack>
```

