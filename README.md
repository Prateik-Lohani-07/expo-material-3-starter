# Expo Material 3 Starter Template

This template is meant to speed-up development using [React Native Paper](https://oss.callstack.com/react-native-paper/) + [Nativewind](https://www.nativewind.dev/), complete with [Material You](https://m3.material.io/) (Material Design 3) theming.

## Overview

The template contains a setup that most expo developers are familiar with, so no customization in folder structure is required. You can start building as you normally do in any expo app.

A theme has been pre-setup in the `src/styles` folder so you can start building right away. For custom theming, follow [step 3](#step-3) onwards.

## Usage

To get started:

1. Clone this repository

    ```shell
    git clone https://github.com/Prateik-Lohani-07/expo-material-3-starter.git
    ```

2. Install dependencies:

    ```shell
    npm install
    ```

3. <a id="step-3"></a>For custom theming, you can generate a Material 3 JSON file from the following [free tool](https://material-foundation.github.io/material-theme-builder). After selecting colors and fonts, click "**Export**" on the right sidebar's bottom menu and select the "**Material Theme (JSON)**" option.

4. Once you have the JSON, plug in the necessary values into objects into both `Theme.ts` (utilities for Nativewind) and `PaperTheme.ts` (styles for PaperTheme).

5. Run the app. You can now use Nativewind colors anywhere in your app and your React Native Paper components will be styled according to your theme.

## Folder structure

The template follows a basic expo folder structure, except it uses `src/app` (instead of `app` being in the root directory) for the app entrypoint. You can find the theming logic in the `src/styles` folder.

## Styling

1. `global.css`: main entrypoint for tailwind base, components and utilities.
2. `PaperTheme.ts`: contains a PaperTheme object containing colors relevant for use by react native paper
3. `Theme.ts`: contains variables to be injected into Nativewind.

## Conclusion and Future Scope

Feel free to add any improvements and/or corrections to this template.

I am also currently working on a CLI tool that will allow automatic creation of the `PaperTheme.ts` and `Theme.ts` objects so that this template can then be integrated into that.
