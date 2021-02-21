const child_process = require('child_process');
const fs = require('fs');
let ejs = require('ejs');


function copyTemplate(path, to) {
    const main_template = fs.readFileSync(path)
    let txt = ejs.render(main_template.toString(), {});
    fs.writeFileSync(to, txt);

}

try {
    fs.mkdirSync("project")
}
catch (e) {
}
process.chdir("project")

try {
    fs.mkdirSync("src")
}
catch (e) {
}

try {
    fs.mkdirSync("dist")
}
catch (e) {
}

copyTemplate('../templates/main.js', 'src/main.js')
copyTemplate('../templates/app.css', 'src/app.css')
copyTemplate('../templates/colors.css', 'src/colors.css')
copyTemplate('../templates/app.js', 'src/app.js')
copyTemplate('../templates/index.html', 'dist/index.html')
copyTemplate('../templates/webpack.config.js', 'webpack.config.js')
copyTemplate('../templates/package.json', 'package.json')