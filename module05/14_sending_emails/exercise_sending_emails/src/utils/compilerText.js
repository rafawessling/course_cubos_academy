import handlebars from 'handlebars';
import fs from 'fs/promises';

const compilerText = async (file, context) => {
    const html = await fs.readFile(file);
    const template = handlebars.compile(html.toString());
    const output = template(context);
    return output;
};

export default compilerText;
