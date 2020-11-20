import App from '@/config/app';

const { APP_NAME, PORT } = process.env;

const feedback = () => console.log(`[${PORT}]${APP_NAME}`);

App.listen(PORT, feedback);
