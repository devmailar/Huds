onNet('Huds/scoreboard', (visible, heist_id) => {
  console.info({
    event: 'Huds/scoreboard',
    visible: visible,
    heist_id: heist_id,
  });

  // SetTimecycleModifier('Bloom');
  // SetTimecycleModifierStrength(1.8);

  // const cameraPos = [211.1, 206.06, 107.2];
  // const camera = CreateCameraWithParams('DEFAULT_SCRIPTED_CAMERA', cameraPos[0], cameraPos[1], cameraPos[2], 0, 0, -70, 90, true, 2);

  // SetCamActive(camera, true);
  // SetCamMotionBlurStrength(camera, 0.5);
  // SetCamFov(camera, 40);
  // RenderScriptCams(true, true, 3000, true, false);

  // SetTimecycleModifier('scanline_cam_cheap');
  // SetTimecycleModifierStrength(1.5);

  SendNuiMessage(
    JSON.stringify({
      visible: visible,
      heist_id: heist_id,
    })
  );
});
