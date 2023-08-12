onNet('Huds/vehicle', (display, data) => {
  console.info('Net event called <Huds/vehicle>');
  console.info('Display:', display);
  console.info('Data:', data);

  SendNuiMessage(
    JSON.stringify({
      visible: display,
      data: data,
    })
  );
});
