import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['types/*.ts'],
	dts: true,
	clean: true,
});
