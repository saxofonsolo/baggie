const sharedTasks = ["prettier --write"];

// eslint-disable-next-line no-undef
module.exports = {
    "./packages/**/src/**/*.*(ts|tsx|mdx)": ["eslint --max-warnings 1 --fix --cache -c .eslintrc.commit.json -- ", ...sharedTasks],
    "./packages/**/src/**/*.*(css|scss)": ["stylelint --max-warnings 1 --fix --cache -- ", ...sharedTasks],
};
