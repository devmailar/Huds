onNet('Huds/character', (display, data) => {
  console.info({
    event: 'Huds/character',
    display: display,
    data: data,
  });

  SendNuiMessage(
    JSON.stringify({
      visible: display,
      data: data,
    })
  );
});
