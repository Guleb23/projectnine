import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Укажите пути
const publicDir = path.join(__dirname, 'public'); // Папка public
const projectRoot = __dirname;                   // Корень проекта (для проверки всех файлов)

// 2. Какие форматы изображений проверяем
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];

// 3. Игнорируемые папки (node_modules, .git и т.д.)
const ignoreDirs = [
    'node_modules',
    'dist',
    '.git',
    '.vscode',
    '.idea',
    'public' // Саму папку public не проверяем
];

// 4. Находим ВСЕ изображения в public и подпапках
const allImages = [];
function scanImages(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            scanImages(fullPath);
        } else if (imageExtensions.some(ext => file.endsWith(ext))) {
            const relativePath = path.relative(publicDir, fullPath);
            allImages.push(relativePath);
        }
    });
}
scanImages(publicDir);

// 5. Ищем использование изображений во ВСЕХ файлах проекта (кроме игнорируемых папок)
const usedImages = new Set();
function scanProject(dir) {
    if (ignoreDirs.some(ignoreDir => dir.includes(ignoreDir))) {
        return; // Пропускаем игнорируемые папки
    }

    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanProject(fullPath);
        } else {
            // Проверяем все файлы, кроме бинарных (можно добавить исключения)
            if (!/\.(bin|exe|dll|zip|rar|pdf|ico|mp4)$/i.test(file)) {
                try {
                    const content = fs.readFileSync(fullPath, 'utf-8');
                    allImages.forEach(img => {
                        // Проверяем разные варианты ссылок
                        if (
                            content.includes(`/${img}`) ||          // /images/logo.png
                            content.includes(`"${img}"`) ||         // "images/logo.png"
                            content.includes(`'${img}'`) ||         // 'images/logo.png'
                            content.includes(`%PUBLIC_URL%/${img}`) // React-специфика
                        ) {
                            usedImages.add(img);
                        }
                    });
                } catch (e) {
                    console.warn(`⚠️ Не удалось прочитать файл: ${fullPath}`);
                }
            }
        }
    });
}
scanProject(projectRoot);

// 6. Выводим результат
const unusedImages = allImages.filter(img => !usedImages.has(img));
console.log('🔍 Неиспользуемые изображения в public/:');
console.log(unusedImages.join('\n'));

// 7. Опционально: автоматическое удаление (раскомментируйте)
// unusedImages.forEach(img => {
//   const fullPath = path.join(publicDir, img);
//   fs.unlinkSync(fullPath);
//   console.log(`🗑️ Удалено: ${img}`);
// });