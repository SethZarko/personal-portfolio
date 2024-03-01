

export const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()

  return (

    <footer>
        <hr/>
        <small>SETH ZARKOVICH WEB DEV <br />&copy; { year } ALL RIGHTS RESERVED.</small>
    </footer>
  )
}
