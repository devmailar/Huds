onNet('Huds/character', (display, data) => {
  SendNuiMessage(
    JSON.stringify({
      visible: display,
      data: data,
    })
  );
});
