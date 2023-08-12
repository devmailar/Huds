onNet('Huds/character', (display, data) => {
  console.info('Net event called <Huds/character>');
  console.info('Display:', display);
  console.info('Data:', data);

  SendNuiMessage(
    JSON.stringify({
      visible: display,
      data: data,
    })
  );
});
