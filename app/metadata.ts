/* 
* @license MIT
* ~~~~~~~~~~~~
* abraham-ukachi-app
* ~~~~~~~~~~~~
* Copyright (c) 2024 Abraham Ukachi. The abElments Project.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the 'Software'), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* @project: abraham-ukachi-app
* @name: abraham-ukachi Metadata
* @file: metadata.ts
* @type: TypeScript
* @authors: Abraham Ukachi <abraham.ukachi@laplateforme.io>
*
* Example usage:
*   1+|> 
*    -|>
*
*/


/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


// import the Metadata type from `next`
import type { Metadata } from 'next';


// create and export some vip path directories ;)
export const ASSETS_DIR: string = '/assets';
export const IMAGES_DIR: string = '/assets/images';
export const MANIFEST_DIR: string = '/assets/images/manifest';


export { Metadata };

// create and export abraham-ukachi' root static metadata as `StaticMetadata`
export const StaticMetadata: Metadata = {
  /* Application Name */
  applicationName: 'Abraham Ukachi',

  /* App Title */
  title: {
    template: '%s | abraham-ukachi',
    default: 'Coming Soon 🫶🏼 - abraham-ukachi',
  },

  /* App Description */
  description: 'The official web app - portfolio + AI assistant - of Abraham Ukachi built with ❤️ using Next.js and initially deployed on Vercel.',

  /* JSON Manifest file */
  manifest: '/manifest.json',

  /* Generator 4 SEO */
  generator: 'abraham-ukachi',

  /* Referrer - OWCO to send the full URL to referring pages within abraham-ukachi but only domain/subdomain to external sites */
  referrer: 'origin-when-cross-origin',

  /* Keywords */
  keywords: [ "official", "web-app", "nextjs", "portfolio", "ai-assistant", "vercel", "abraham", "ukachi" ],
 
  /* Apple Web App - ...add to homescreen for Safari on iOS */
  appleWebApp: {
    title: 'abraham-ukachi',
    statusBarStyle: 'default',
  },

  /* App Icons */
  icons: {
    icon: [ {url: IMAGES_DIR + '/favicon.ico'} ],
    shortcut: [ IMAGES_DIR + '/shortcut-icon.png' ],
    apple: [
      { url: MANIFEST_DIR + '/squircle' + '/icon-48x48.png' },
      { url: MANIFEST_DIR + '/squircle' + '/icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: MANIFEST_DIR + '/squircle' + '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: MANIFEST_DIR + '/squircle' + '/icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: MANIFEST_DIR + '/squircle' + '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ]
  },

  /* abraham-ukachi Authors */
  authors: [
    {name: 'Abraham Ukachi', url: 'https://github.com/abraham-ukachi'},
  ],


}
