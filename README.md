# FOCUS Movies

FOCUS Movies is an app that consumes [themoviedb API](https://developers.themoviedb.org/) and provides to the user with the most popular movies nowadays. From which you can obtain details and other related movies, and searching information for your favorite movies.


## ✈️ How to get started?

📝 **Only test on Android version**

```
git clone https://github.com/oicrruf/mymovies-focus.git
npm install
npm run android
```

For login use:

```
{
	"email": "eve.holt@reqres.in",
	"password": "cityslicka"
}
```

## 🌳 Directories

The project start on App.tsx

```
.
├── App.tsx
├── assets
│   ├── download.json
│   ├── fonts
│   │   ├── Montserrat-Black.ttf
│   │   ├── Montserrat-BlackItalic.ttf
│   │   ├── Montserrat-Bold.ttf
│   │   ├── Montserrat-BoldItalic.ttf
│   │   ├── Montserrat-ExtraBold.ttf
│   │   ├── Montserrat-ExtraBoldItalic.ttf
│   │   ├── Montserrat-ExtraLight.ttf
│   │   ├── Montserrat-ExtraLightItalic.ttf
│   │   ├── Montserrat-Italic.ttf
│   │   ├── Montserrat-Light.ttf
│   │   ├── Montserrat-LightItalic.ttf
│   │   ├── Montserrat-Medium.ttf
│   │   ├── Montserrat-MediumItalic.ttf
│   │   ├── Montserrat-Regular.ttf
│   │   ├── Montserrat-SemiBold.ttf
│   │   └── Montserrat-SemiBoldItalic.ttf
│   ├── logo.png
│   └── splash.json
├── components
│   ├── atoms
│   │   ├── List
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── Loading
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── MainMovie
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── Portrait
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── SearchBar
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── SearchButton
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── SignOutButton
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   └── Splash
│   │       ├── index.tsx
│   │       └── styles.tsx
│   └── screens
│       ├── Detail
│       │   ├── index.tsx
│       │   └── styles.tsx
│       ├── Home
│       │   ├── index.tsx
│       │   └── styles.tsx
│       ├── Login
│       │   ├── index.tsx
│       │   └── styles.tsx
│       └── Search
│           ├── index.tsx
│           └── styles.tsx
├── config
│   └── enviroment.json
├── navigation
│   └── index.tsx
├── styles
│   └── index.tsx
└── utils
    └── index.tsx
```

The project starts in the App.tsx file, requesting the necessary components from the `src/components` directory. Where the components have been divided by atoms and screens.

- **Assets:** inside of this folder you will find the necessary files for the Splash screen, Loading animation, the application logo and fonts used.

- **Config:** in the configuration folder there are necessary strings for the configuration of the project.

- **Utils:** you will find all the necessary functions for the API consumption and transactions that FOCUS Movies performs.

- **Navigation:** here you will find the settings for navigation between screens.


### 👁️ Check recomendations

Review the [Pull Requests](https://github.com/oicrruf/mymovies-focus/pulls?q=is%3Apr+is%3Aclosed) section to follow up the flow of changes made by each one of the requested tasks.
