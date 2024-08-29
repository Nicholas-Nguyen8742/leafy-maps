/* eslint-disable no-case-declarations */

figma.loadAllPagesAsync();

figma.showUI(__html__, {
  width: 1280,
  height: 900
});

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
  }
}
