import './styles.css';
export const metadata = {
  title: 'Plan Nuclear — Argentina',
  description: 'El futuro es nuclear. Energía limpia, estable y escalable para la era de la IA.',
};
export default function RootLayout({ children }) {
  return (<html lang="es"><body>{children}</body></html>);
}
