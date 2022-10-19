import { faker } from '@faker-js/faker';
import fs from 'fs';

let namesList = '';
for (let i = 0; i < 1000; i++) {
    let name = faker.name.fullName();
    namesList = namesList.concat(name, '\n')
}

console.log(namesList)
const content = namesList;

fs.writeFile('names.txt', content, err => {
    if (err) {
      console.error(err);
    } else{
        console.log('El archivo se creó con éxito')
    }
  });