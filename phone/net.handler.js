onNet('Huds/phone', (display, data) => {
  console.info('Net event called <Huds/phone>');
  console.info('Display:', display);
  console.info('Data:', data);

  SetNuiFocus(display, display);
  SendNuiMessage(
    JSON.stringify({
      visible: display,
      data: data,
    })
  );
});
