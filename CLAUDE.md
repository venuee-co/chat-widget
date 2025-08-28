# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a JavaScript chat widget library for LINE and phone contact functionality, designed to be deployed via Cloudflare Workers. The widget provides customizable floating buttons for LINE messaging and phone calls.

## Architecture

The codebase consists of:

- **src/chatWidget.js**: Main UMD library that creates customizable chat buttons
- **worker/index.js**: Cloudflare Workers entry point that serves the library
- **wrangler.toml**: Cloudflare Workers configuration
- **template.tpl**: Template file (likely for build process)

The widget is served at `lib.venuee-performance.com/chat-widget.js` and can be embedded in any website.

## Common Commands

### Development
- `npm run dev` - Start local development server using Wrangler
- `npm run build` - Build the project using Webpack
- `npm run deploy` - Deploy to Cloudflare Workers

### Dependencies
- Uses Webpack 5 for bundling
- Wrangler 3.80.0 for Cloudflare Workers deployment
- No test framework currently configured

## Key Configuration

The chat widget accepts these options:
- `lineUrl`: LINE contact URL
- `phoneNumber`: Phone number for calls
- `position`: Widget position (bottom-right, bottom-left, top-right, top-left)
- `marginBottom/marginRight`: Spacing from edges
- `lineColor/phoneColor`: Button colors

## Deployment

The project uses Cloudflare Workers for deployment. The worker serves the JavaScript library with appropriate CORS headers and caching. Production deployment is configured to serve from the custom domain.