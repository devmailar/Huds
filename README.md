# Huds

This repository provides (UI) web resources for game called fivem.

Currently, its using:

- [@vitejs](https://vitejs.dev/)
- [@tailwindui](https://tailwindui.com/)

Also using functions like `SendNuiMessage` from fivem's native reference:

- [Native Reference](https://docs.fivem.net/natives/)

## Information about resources:

- Folder `character` is a character hud that you can call with `SendNUIMessage()` it has parameter of visibility and data.

```js
SendNuiMessage(
  JSON.stringify({
    visible: display, (boolean)
    data: [], (array)
  })
);
```

- Folder `scoreboard` is a notification that you can call with `SendNUIMessage()` it has parameter of visibility and data.

```js
SendNuiMessage(
  JSON.stringify({
    visible: display, (boolean)
    data: [], (array)
  })
);
```

- Folder `vehicle` is a layout that you can call with `SendNUIMessage()` it has parameter of visibility and data.

```js
SendNuiMessage(
  JSON.stringify({
    visible: display, (boolean)
    data: [], (array)
  })
);
```

## Running

You can run the following resources in fivem or directly in your web.

- Todo this you have to clone the repository and go inside one of the projects and install `node_modules` using yarn or npm or any other package manager.
- Next go to the `src/main.jsx` and add following code under root variable:
- Then run the code by using scripts found in `package.json`

```
window.postMessage({
  visible: true,
  data: [{ message: "This is test data" }], // object of array that has some value
});
```
