# React Responsive Image

## Installation

```bash
yarn add @adeyahya/rrp

# or

npm install @adeyahya/rrp --save
```

## Usage

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, Image } from '@adeyahya/rrp';

const App = () => {
  return (
    <Provider>
      <Image src="https://res.cloudinary.com/dt2mntbmf/image/upload/v1597818712/image-20200819133002593_qqtn6b.png" />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### license

MIT
