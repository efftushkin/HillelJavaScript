# HillelJavaScript

Для виконання цього ДЗ вам необхідно переглянути урок по npm

* Створюємо репозиторій на github
* Через консоль клонуємо його на ПК
* Через консоль створюємо файл index.js у корені
* В цьому файлі реалізовуються функції: додавання, віднімання та множення
* Ініціалізуємо npm (npm init) і заповнюємо всі поля
* Встановлюємо в проект пакет lodash
* Створюємо файл .gitignore і додаємо в нього все, що не повинно бути на github. Це точно папка node_modules та інші системні папки, які у вас є (.vscode , .idea тощо)
* Додайте prettier в проект
* Запустіть його через npx. Подивіться які файли були змінені
* Встановіть eslint в проект
* Виконайте ініціалізацію з правилами airbnb
* Запустіть лінтер на файлах проекту, виправте зауваження
* Через командну строку заливаємо все на github

## Prettier
перевірка: npx prettier -c ./index.js  
виправлення: npx prettier -w ./index.js

## ESLint
встановлення й налаштування eslint  
* npm install eslint@8.2.0 --save-dev  
* npm install --save-dev eslint-config-airbnb-base  
* npx eslint --init  
√ How would you like to use ESLint? · style  
√ What type of modules does your project use? · esm  
√ Which framework does your project use? · none  
√ Does your project use TypeScript? · No  
√ Where does your code run? · browser  
√ How would you like to define a style for your project? · guide  
√ Which style guide do you want to follow? · airbnb  
√ What format do you want your config file to be in? · JSON  
Checking peerDependencies of eslint-config-airbnb-base@latest  
The config that you've selected requires the following dependencies:  
eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2  
√ Would you like to install them now with npm? · Yes  
Successfully created .eslintrc.json file

перевірка стиля  
npx eslint ./index.js

після виправлення залишилось три ворнінга
* 16:1  warning  Unexpected console statement  no-console
* 17:1  warning  Unexpected console statement  no-console
* 18:1  warning  Unexpected console statement  no-console

## Prettier vs ESLint
Prettier намагається обертати рядкові літерали в подвійні лапки, ESLint - в одинарні
