import path from 'path';

// NB: when we use nodemon/watch mode, this file is relative to
// the /server directory, rather than the /server/build directory.
// TODO: see if there's a better way to handle this
const root = path.join(__dirname, process.env.WATCH_MODE ? '..' : '../..');

export const build = path.join(root, './client/build');
export const index = path.join(build, 'index.html');
export const port = process.env.PORT || 3000;
export const secret = process.env.SECRET || 'opensesame';
