
import '@styles/globals.css';

export const metadata = {
  title: 'Sample App',
  description: 'This is a sample Next.js app.',
};

const RootLayout = ({ children }) => {
  return (
      <html lang='en'>
          <body>
            <div className='main'>
              <div className='gradient'></div>
            </div>
            <div className='app'>
              {children}
            </div>
          </body>
      </html>
  );
};

export default RootLayout;
