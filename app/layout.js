
import '@styles/globals.css';
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
    title: 'Sample App',
    description: 'This is a Next.js sample app.',
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient"></div>
                    </div>
                    <div className="app">
                        <Nav />
                        {children}
                    </div>
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
