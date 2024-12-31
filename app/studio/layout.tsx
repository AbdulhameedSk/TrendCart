import { title } from "process";

 export const metadata={
    title: "Next App",
    description: "Generated by create next app",
 }

    export default function RootLayout({
        children
    }: Readonly<{
        children: React.ReactNode;
    }>) {
        return (
            <html lang="en">
                <body className="antialiased">
                    {children}
                </body>
            </html>
    );
}
    