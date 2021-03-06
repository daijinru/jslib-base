// rollup.config.js

var babel = require('rollup-plugin-babel');
var common = require('./rollup.js');
var typescript = require('rollup-plugin-typescript2');

if (common.isJS) {
    // esmascript
    module.exports = {
        input: 'src/index.js',
        output: {
            file: 'dist/index.js',
            format: 'cjs',
            // 如果不同时使用 export 与 export default 可打开legacy
            // legacy: true,
            banner: common.banner,
        },
        plugins: [
            babel({
                runtimeHelpers: true,
                exclude: 'node_modules/**'
            })
        ]
    };
} else {
    // typescript
    module.exports = {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.js',
            format: 'cjs',
            // 如果不同时使用 export 与 export default 可打开legacy
            // legacy: true,
            banner: common.banner,
        },
        plugins: [
            typescript({
                tsconfigOverride: { compilerOptions : { declaration: true } },
                useTsconfigDeclarationDir: true
            })
        ]
    };
}

