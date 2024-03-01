// Components
import { Hero } from '../components/Hero.jsx'

export const Home = () => {
  let date = new Date()
  let year = date.getFullYear()

  return (
   <>
    <Hero/>
    <footer id="hero-footer">
            <hr/>
            <small>SETH ZARKOVICH WEB DEV <br />&copy; { year } ALL RIGHTS RESERVED.</small>
    </footer>
   </>
  )
}
