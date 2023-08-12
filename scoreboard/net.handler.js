onNet('Huds/scoreboard', (display, data) => {
  console.info('Net event called <Huds/scoreboard>');
  console.info('Display:', display);
  console.info('Data:', data);

  SendNuiMessage(
    JSON.stringify({
      visible: display,
      data: data,
    })
  );
});
