import {fileURLToPath, URL} from "node:url";
import { defineConfig } from 'vite'


const fs = require('fs')
const path = require('path')

const PAGES = fs.readdirSync('./pages');

const getInputs = () => {
    return PAGES.reduce((inputs, page) => {
        inputs[page.replace('.html', '')] = path.resolve(__dirname, `./pages/${page}`);

        return inputs;
    }, {});
}

const INPUTS = getInputs();


export default defineConfig({
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    base: '/Ladesign/',
    build: {
        rollupOptions: {
            input: {
                home: path.resolve(__dirname, 'index.html'),
					 work: path.resolve(__dirname, 'pages/work.html'),
                services: path.resolve(__dirname, 'pages/services.html'),
                contacts: path.resolve(__dirname, 'pages/contacts.html'),
                error: path.resolve(__dirname, 'pages/error.html'),
                ...INPUTS
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                          @import "./src/styles/_variables.scss";
                        `
                }
            }
        }
    }
});
