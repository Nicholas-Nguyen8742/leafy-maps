/* eslint-disable @typescript-eslint/no-explicit-any */
const figmaMessenger = (pluginMessage: any) => {
  parent.postMessage({
    pluginMessage
  },
  'https://www.figma.com'
  )
};

export default figmaMessenger;
