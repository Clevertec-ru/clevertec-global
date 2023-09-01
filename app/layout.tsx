type ChildrenProps = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: ChildrenProps) => (
    <html lang='en'>
        <body>
            <main>{children}</main>
        </body>
    </html>
);

export default RootLayout;
