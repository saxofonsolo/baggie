const sharedTasks = ["prettier --write"];

// eslint-disable-next-line no-undef
module.exports = {
    "./packages/**/src/**/*.*(ts|tsx)": ["eslint --max-warnings 1 --fix --cache -c .eslintrc.commit.json -- ", ...sharedTasks],
};
