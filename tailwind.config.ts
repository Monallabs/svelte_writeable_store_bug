
import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
   darkMode: 'class',
   content: ['./src/**/*.{html,js,svelte,ts}',
   ],
   safelist: [],
   theme: {
   extend: {
	   fontFamily: {}
	   ,       
	   fontWeight: {
		   '100': 100,
		   '200': 200,
		   '300': 300,
		   '400': 400,
		   '500': 500,
		   '600': 600,
		   '700': 700,
		   '800': 800,
		   '900': 900,
	   },
   },
},
plugins: [
	forms,
	typography,
]
} satisfies Config;


