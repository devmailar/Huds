RegisterRawNuiCallback('exit', async () => {
  emit('Screens/phone', false, [
    {
      job: 'N/A',
    },
  ]);
});
