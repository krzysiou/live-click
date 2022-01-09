# live-click
A website designed to help you and your friends play different games in which order of responses matters. The idea struck me in the beggining of global lockdown due to coronavirus spread. Me and my friends lacked a platform to play said games so i thought of making a website to solve that problem. It is based on ```rooms``` to which users can join and enjoy time spend together. Website registers order of player clicks and builds a bracket.

## Website setup
For starters install all modules using ```npm install```. And start hosting the website by typing ```npm run serve```, after few seconds just simply hit on one of two links displayed in your command prompt and enjoy cruising my website. It is important to notice that for cruicial features of the site you will need a serverside backend that i developed [here](https://github.com/krzysiou/live-click-api) just follow the guide there to setup server for our website.

## Contents and features
The website is composed of many sub-websites which are being shown according to [router file](./src/router/index.js) which contains many routes and redirects.

### Log In [component](./src/components/LogIn.vue)

![Zrzut ekranu 2022-01-9 o 01 33 18](https://user-images.githubusercontent.com/60892747/148664750-9a655715-404c-43e9-867d-b521e7fd7942.png)

It briefly explains the main purpose of the site and lets you ```log in``` or redirect to ```register``` component. After logging or signing in you will be provided with and ```access token``` that will be stored in cookies using this [methods](./src/utils/cookies.js). it will allow you to skip logging in process and be redirected automatically to your account page.

### Register [component](./src/components/Register.vue)

![Zrzut ekranu 2022-01-9 o 01 33 28](https://user-images.githubusercontent.com/60892747/148664792-5ccb885b-27b9-4f3d-9927-f3f84f17fa16.png)

Basic registration. Three input forms that gather data which will be sent to the server. It also contains button which allows you to redirect to ```log in``` if you already got an account.

### Welcome [component](./src/components/Welcome.vue)

![Zrzut ekranu 2022-01-9 o 01 34 00](https://user-images.githubusercontent.com/60892747/148664842-92d92d85-3a1d-4f9f-8ef7-795e66c16ee8.png)

Now things start to get interesting. The welcome component consists of three main components and a log out button with ```X``` icon on it. ```set custom name``` allows you to set your nickname that other players will see upon entering room. ```create room``` creates a room with id same as your ```user id```. ```join lobby``` allows you to join existing room by typing in lobby id which is the same as its owner's id, simply copy the id from url and pass it to your friends.

### Rooms [component](./src/components/Rooms.vue)

![Zrzut ekranu 2022-01-9 o 01 34 12](https://user-images.githubusercontent.com/60892747/148664897-5862f9b9-0e7b-49ad-b983-fff50bc1d4c7.png)

![Zrzut ekranu 2022-01-9 o 01 35 00](https://user-images.githubusercontent.com/60892747/148664899-8b954d7b-54fe-44ac-8e42-0896220023f5.png)

It comes in two variants which depend if you are the ```room owner```. ```Standard version``` have two buttons, bottom one leaves the room. and the middle one allowys you to play the game. This button will be the one that registers order of users clicks. ```Owner version``` comes with two additional buttons. One represented by the ```play icon``` starts the timer set to 5 seconds after which the server will start registering clicks and forming bracket. The second one represented by ```restart icon``` resets the bracket.

### Error [component](./src/components/Error.vue)

This sub-site is displayed every time that error occurs.
