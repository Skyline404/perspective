import { gsap } from 'gsap';
import { GSDevTools } from 'gsap/GSDevTools';

// without this line, plugins may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(GSDevTools);
