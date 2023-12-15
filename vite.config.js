import reactRefresh from '@vitejs/plugin-react';

export default {
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
      },
    },
  },
};