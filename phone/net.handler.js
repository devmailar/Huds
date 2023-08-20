onNet('Screens/phone', (display) => {
  const testData = {
    job: 'officer', // 'officer', 'nurse', ''...
  };

  console.info('Net event called <Screens/phone>');
  console.info('Display:', display);
  console.info('Data:', testData);

  SetNuiFocus(display, display);
  SendNuiMessage(
    JSON.stringify({
      visible: display,
      data: testData,
    })
  );
});
