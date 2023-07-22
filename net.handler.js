onNet('Huds/character', (display, character) => {
  console.info('Net event called <Huds/character>');

  SendNuiMessage(
    JSON.stringify({
      type: 'character',
      visible: display,
      data: character,
    })
  );
});

onNet('Huds/scoreboard', (display) => {});
