
import '@styles/globals.css';
import Nav from "@components/Nav";

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
                    <Nav />
                    {children}
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
