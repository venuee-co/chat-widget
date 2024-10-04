# Chat Widget

A customizable chat widget for adding LINE and phone contact buttons to your website.

## Installation

You can install this widget using npm:

```
npm install chat-widget
```

Or include it directly in your HTML using a CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/your-username/chat-widget/chatWidget.min.js"></script>
```

## Usage

```javascript
import ChatWidget from 'chat-widget';

const widget = ChatWidget({
  lineId: 'your-line-id',
  phoneNumber: 'your-phone-number',
  position: 'bottom-right',
  marginBottom: '25px',
  marginRight: '25px',
  lineColor: '#00B900',
  phoneColor: '#FF9c00'
});

widget.init();
```

## Options

- `lineId`: Your LINE@ account ID
- `phoneNumber`: Your contact phone number
- `position`: Position of the widget ('top-left', 'top-right', 'bottom-left', 'bottom-right')
- `marginBottom`: Bottom margin (default: '25px')
- `marginRight`: Right margin (default: '25px')
- `lineColor`: Background color of LINE button (default: '#00B900')
- `phoneColor`: Background color of phone button (default: '#FF9c00')

## License

MIT