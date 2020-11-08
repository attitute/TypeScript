import ts from 'rollup-plugin-typescript2'; // 解析ts的插件
import {nodeResolve} from '@rollup/plugin-node-resolve' // 解析第三方模块的插件
import serve from 'rollup-plugin-serve' // 启动本地服务的插件
import path from 'path'

export default {
    input: 'src/index.ts',
    output:{
        format: 'iife', // 自执行函数 立即执行
        file: path.resolve('dist/bundle.js'),
        sourcemap: true, 
    },
    plugins:[
        nodeResolve({
            extensions: ['.js','.ts']
        }),
        ts({
            tsconfig: path.resolve(__dirname, 'tsconfig.json')
        }),
        serve({
            openPage: 'public/index.html',
            contentBase: '',
            port: 8080
        })
    ]
}


