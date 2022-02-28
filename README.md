# live-click
A website designed to help you and your friends play different games in which order of responses matters. The idea struck me in the beggining of global lockdown due to coronavirus spread. Me and my friends lacked a platform to play said games so i thought of making a website to solve that problem. It is based on ```rooms``` to which users can join and enjoy time spend together. Website registers order of player clicks and builds a bracket.

## Technologies

- Vue
- VueRouter
- Axios
- Tailwind CSS
- Cookies
- JWT token

## Website setup
For starters install all modules using ```npm install```. And start hosting the website by typing ```npm run serve```, after few seconds just simply hit on one of two links displayed in your command prompt and enjoy cruising my website. It is important to notice that for cruicial features of the site you will need a serverside backend that i developed [here](https://github.com/krzysiou/live-click-api) just follow the guide there to setup server for our website.

## Contents and features
The website is composed of many sub-websites which are being shown according to [router file](./src/router/index.js) which contains many routes and redirects.

### Log In [component](./src/components/LogIn.vue)

![Zrzut ekranu 2022-01-9 o 01 33 18](https://user-images.githubusercontent.com/60892747/148664750-9a655715-404c-43e9-867d-b521e7fd7942.png)

It briefly explains the main purpose of the site and lets you ```log in``` or redirect to ```register``` component. After logging or signing in you will be provided with and ```access token``` that will be stored in cookies using this [methods](./src/utils/cookies.js). it will allow you to skip logging in process and be redirected automatically to your account page.

### Register [component](./src/components/Register.vue)

![Zrzut ekranu 2022-01-9 o 02 15 40](https://user-images.githubusercontent.com/60892747/148665495-fb46d01a-4941-46ca-9860-3fea4214e9a9.png)

Basic registration. Three input forms that gather data which will be sent to the server. It also contains button which allows you to redirect to ```log in``` if you already got an account.

### Welcome [component](./src/components/Welcome.vue)

![Zrzut ekranu 2022-01-9 o 02 16 27](https://user-images.githubusercontent.com/60892747/148665498-830eb1e4-58fd-44ea-9658-7ac331b8e7b0.png)

Now things start to get interesting. The welcome component consists of three main components and a log out button with ```X``` icon on it. ```set custom name``` allows you to set your nickname that other players will see upon entering room. ```create room``` creates a room with id same as your ```user id```. ```join lobby``` allows you to join existing room by typing in lobby id which is the same as its owner's id, simply copy the id from url and pass it to your friends.

### Rooms [component](./src/components/Rooms.vue)

![Zrzut ekranu 2022-01-9 o 02 16 55](https://user-images.githubusercontent.com/60892747/148665503-1ccae5d6-c6dd-4cff-a2c0-8fbb6c9ff6bb.png)

![Zrzut ekranu 2022-01-9 o 02 17 54](https://user-images.githubusercontent.com/60892747/148665505-b3c8e6b8-4ff1-4294-92e8-1b0edab2483c.png)

It comes in two variants. The one shown to you depends on your ```room owner``` status. ```Standard version``` have two buttons, bottom one leaves the room. and the middle one allowys you to play the game. This button will be the one that registers order of users clicks. ```Owner version``` comes with two additional buttons. One represented by the ```play icon``` starts the timer set to 5 seconds after which the server will start registering clicks and forming bracket. The second one represented by ```restart icon``` resets the bracket.

### Error [component](./src/components/Error.vue)

This sub-site is displayed every time that error occurs.

## Debugging

If something does not work properly start your debug process by deleting cookies provided by localhost.
