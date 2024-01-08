import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import superagent from 'superagent';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readFilePro = (file) => {
  // we are returning a promise insted of the callback func because I can user the resolve and reject params
  // (they are realy functions) for more handling I guss
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      // the data (the params of the resolved function) will be available in the 'catch' methode
      if (err) reject('I could not find the link 😅');
      // the data (the params of the resolved function) will be available in the 'then' methode
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('could not write the file 😅');
      resolve('succes');
    });
  });
};

// this is using 'async' and await
const goDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`the breed: ${data}`);

    const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    console.log(res.body.message);

    await writeFilePro(`${__dirname}/dog_image.txt`, res.body.message);
    console.log('dog image is saved');
  } catch (err) {
    console.log(err);
  }
};

goDogPic();

// this code is using 'then' and 'catch'
// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`the breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePro(`${__dirname}/dog_image.txt`, res.body.message);
//     // fs.writeFile('dog_image.txt', res.body.message, (err) => {
//     //   if (err) console.log(err);
//     //   console.log('dog image saved 🔥👌');
//     // });
//   })
//   .then(() => {
//     console.log('dog image saved 🔥👌');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
