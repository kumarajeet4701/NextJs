  export default function ProductDetailsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          
          {children}
            <h3>This is Product Feature show in all pages</h3>
          </body>
      </html>
    )
  }