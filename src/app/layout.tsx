import { Metadata } from "next"
export const metadata : Metadata={
  title:{
    absolute:"",
    default:"Next Js Learning ",
    template:"%s | Learning"
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <header>
            <h3 style={{border:"2px solid black", textAlign:"center"}}>This is Header</h3>
          </header>
        {children}
        <footer>
          <p style={{border:"2px solid black", textAlign:"center"}} >This is footer </p>
        </footer>
        </body>
    </html>
  )
}
