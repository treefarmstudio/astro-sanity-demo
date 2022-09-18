import { portableTextToHtml } from 'astro-sanity';
import { urlForImage } from './urlForImage';

const customComponents = {
  /* your custom components here */
  types: {
    image: ({value}) => `<img src="${urlForImage(value).url()}" style="max-width:100%;" />`,
    code: ({value}) => `<pre><code>${value.code}</code></pre>`,
  },
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}