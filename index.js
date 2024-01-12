#!/usr/bin/env node

  import fs from 'fs'
  import { vueComposition } from './template/vue-composition.js';
  import { vueOption } from './template/vue-option.js';
  import { exit } from 'process';
  import path from 'path'

  function handleFileCreate(fileName,option) {

    const filePath = `${process.cwd()}/src/${option}/${fileName}.vue`;

    if (fs.existsSync(filePath)) {

      console.error(`File "${fileName}.vue" already exists.`);

    } else {

      const directory = path.dirname(filePath);

      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }

      let content = () => {
        let array = process.argv[3].split('')
        if(array.includes('c')){
            return vueComposition(fileName,process.argv[3].split(''))
        }else{
            return vueOption(fileName,process.argv[3].split(''))
        }
      } 

      fs.writeFileSync(filePath,content()) 
      console.log(`Created "${process.cwd()}/${fileName}.vue" `);
    }
  }

  if(process.argv[2]){
    let inputString = process.argv[2].split(':')
    let command = inputString[0]
    let option= inputString[1]
    if(
        command == 'make' && 
        option == 'component' || 
        option =='page'
    ){
      if(process.argv[4]){
        handleFileCreate(process.argv[4],option)
      }else{
        console.log('File Name Needed!')
      }
    }
    exit(1)
  }else{
    console.log('Invalid Command')
    exit(1)
  }


