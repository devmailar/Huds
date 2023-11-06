RegisterRawNuiCallback('exit', async () => {
  emit('Huds/phone', false, [
    {
      job: 'N/A',
    },
  ]);
});
