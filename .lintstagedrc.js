const { ESLint } = require("eslint");

const removeIgnoredFiles = async (files) => {
    const eslint = new ESLint();
    const isIgnored = await Promise.all(files.map((file) => eslint.isPathIgnored(file)));
    const filteredFiles = files.filter((_, i) => !isIgnored[i]);

    return filteredFiles.join(" ");
};

module.exports = {
    "**/*.{ts,tsx,js,jsx,json}": async (files) => {
        const filesToLint = await removeIgnoredFiles(files);
        const commands = [`eslint --max-warnings=0 --fix ${filesToLint}`];

        if (filesToLint) {
            commands.push(`prettier --write ${filesToLint}`);
        }

        return commands;
    },
};
