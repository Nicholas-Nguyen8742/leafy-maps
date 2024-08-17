figma.showUI(__html__, {
  width: 800,
  height: 560
});

figma.ui.onmessage = (message) => {
  if (message.type === 'OPEN_IN_BROWSER') {
    figma.openExternal(message.url)
  }
}
