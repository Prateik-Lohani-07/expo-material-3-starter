import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export const PaperTheme = {
	light: {
		"colors": {
			"primary": "rgb(68, 104, 19)",
			"onPrimary": "rgb(255, 255, 255)",
			"primaryContainer": "rgb(196, 241, 140)",
			"onPrimaryContainer": "rgb(16, 32, 0)",
			"secondary": "rgb(88, 98, 73)",
			"onSecondary": "rgb(255, 255, 255)",
			"secondaryContainer": "rgb(220, 231, 199)",
			"onSecondaryContainer": "rgb(22, 30, 11)",
			"tertiary": "rgb(56, 102, 99)",
			"onTertiary": "rgb(255, 255, 255)",
			"tertiaryContainer": "rgb(188, 236, 231)",
			"onTertiaryContainer": "rgb(0, 32, 30)",
			"error": "rgb(186, 26, 26)",
			"onError": "rgb(255, 255, 255)",
			"errorContainer": "rgb(255, 218, 214)",
			"onErrorContainer": "rgb(65, 0, 2)",
			"background": "rgb(253, 252, 245)",
			"onBackground": "rgb(27, 28, 24)",
			"surface": "rgb(253, 252, 245)",
			"onSurface": "rgb(27, 28, 24)",
			"surfaceVariant": "rgb(225, 228, 213)",
			"onSurfaceVariant": "rgb(68, 72, 61)",
			"outline": "rgb(117, 121, 108)",
			"outlineVariant": "rgb(197, 200, 186)",
			"shadow": "rgb(0, 0, 0)",
			"scrim": "rgb(0, 0, 0)",
			"inverseSurface": "rgb(48, 49, 44)",
			"inverseOnSurface": "rgb(242, 241, 233)",
			"inversePrimary": "rgb(169, 212, 115)",
			"elevation": {
				"level0": "transparent",
				"level1": "rgb(244, 245, 234)",
				"level2": "rgb(238, 240, 227)",
				"level3": "rgb(233, 236, 220)",
				"level4": "rgb(231, 234, 218)",
				"level5": "rgb(227, 231, 213)"
			},
			"surfaceDisabled": "rgba(27, 28, 24, 0.12)",
			"onSurfaceDisabled": "rgba(27, 28, 24, 0.38)",
			"backdrop": "rgba(46, 50, 40, 0.4)"
		}
	},
	dark: {
		"colors": {
			"primary": "rgb(169, 212, 115)",
			"onPrimary": "rgb(31, 55, 0)",
			"primaryContainer": "rgb(48, 79, 0)",
			"onPrimaryContainer": "rgb(196, 241, 140)",
			"secondary": "rgb(192, 203, 172)",
			"onSecondary": "rgb(42, 51, 30)",
			"secondaryContainer": "rgb(64, 74, 51)",
			"onSecondaryContainer": "rgb(220, 231, 199)",
			"tertiary": "rgb(160, 208, 203)",
			"onTertiary": "rgb(0, 55, 52)",
			"tertiaryContainer": "rgb(31, 78, 75)",
			"onTertiaryContainer": "rgb(188, 236, 231)",
			"error": "rgb(255, 180, 171)",
			"onError": "rgb(105, 0, 5)",
			"errorContainer": "rgb(147, 0, 10)",
			"onErrorContainer": "rgb(255, 180, 171)",
			"background": "rgb(27, 28, 24)",
			"onBackground": "rgb(227, 227, 219)",
			"surface": "rgb(27, 28, 24)",
			"onSurface": "rgb(227, 227, 219)",
			"surfaceVariant": "rgb(68, 72, 61)",
			"onSurfaceVariant": "rgb(197, 200, 186)",
			"outline": "rgb(143, 146, 133)",
			"outlineVariant": "rgb(68, 72, 61)",
			"shadow": "rgb(0, 0, 0)",
			"scrim": "rgb(0, 0, 0)",
			"inverseSurface": "rgb(227, 227, 219)",
			"inverseOnSurface": "rgb(48, 49, 44)",
			"inversePrimary": "rgb(68, 104, 19)",
			"elevation": {
				"level0": "transparent",
				"level1": "rgb(34, 37, 29)",
				"level2": "rgb(38, 43, 31)",
				"level3": "rgb(43, 48, 34)",
				"level4": "rgb(44, 50, 35)",
				"level5": "rgb(47, 54, 37)"
			},
			"surfaceDisabled": "rgba(227, 227, 219, 0.12)",
			"onSurfaceDisabled": "rgba(227, 227, 219, 0.38)",
			"backdrop": "rgba(46, 50, 40, 0.4)"
		}
	},
};

export const m3LightTheme = { ...MD3LightTheme, colors: PaperTheme.light.colors };
export const m3DarkTheme = { ...MD3DarkTheme, colors: PaperTheme.dark.colors };