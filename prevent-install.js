const execPath = process.env.npm_execpath || '';

if (execPath.includes('yarn')) {
  console.error(
    '\n❌ Using `yarn` is not allowed in this project. Please use yarn.\n'
  );
  process.exit(1);
}
