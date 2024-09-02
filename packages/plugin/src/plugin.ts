/* eslint-disable no-case-declarations */

const WIDTH = 1280;
const HEIGHT = 900;

figma.loadAllPagesAsync();

figma.showUI(__html__, {
  width: WIDTH,
  height: HEIGHT
});

function calculateDimension(original: number, newValue: number, actual: number) {
  const diff = (original < newValue)
    ? Math.abs(original - newValue)
    : -(Math.abs(original - newValue));
  return actual + diff;
}

figma.ui.onmessage = (message) => {
  switch(message?.type) {
    case 'OPEN_IN_BROWSER':
      figma.openExternal(message.url);
      break;

    case 'INTERNAL_GENERATE_MAP':
      console.log({ message });
      figma.createImageAsync(
        message.image
      ).then((image: Image) => {
        const node = figma.createRectangle();
        node.name = 'Map Container';

        node.resize(message.width, message.height);

        node.fills = [
          {
            type: 'IMAGE',
            imageHash: image.hash,
            scaleMode: 'FIT'
          }
        ];

        figma.closePlugin();
      });

      break;

    case 'INTERNAL_RESIZE_MAP':
      console.log({ type: 'INTERNAL_RESIZE_MAP', message })
      const { width, height } = message;
      const originalWidth = 930;
      const originalHeight = 884;

      const calculatedWidth = calculateDimension(originalWidth, parseInt(width), WIDTH);
      const calculatedHeight = calculateDimension(originalHeight, parseInt(height), HEIGHT);

      console.log('calculatedWidth: ', calculatedWidth);
      figma.ui.resize(calculatedWidth, calculatedHeight);
      break;
  }
}
