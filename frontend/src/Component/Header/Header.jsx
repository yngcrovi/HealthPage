import styles from './Header.module.css'
import stylesMenu from './DropDownMenu/DropDownMenu.module.css'
import IconButton from '@mui/material/IconButton'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import DropDownMenu from './DropDownMenu/DropDownMenu'
// import getCookie from '../../CookieFunc/CookieFunc'

export default function Header() {

    const openMenu = () => {
      var el = document.getElementsByClassName(`${stylesMenu.body}`)[0]
      var css = window.getComputedStyle(el)
      if(css.display === 'none'){
        document.getElementsByClassName(`${stylesMenu.body}`)[0].style.display = 'block'
      }else{
        document.getElementsByClassName(`${stylesMenu.body}`)[0].style.display = 'none'
      }
    }

    return (
        <>
          <header className={styles.header}>
            <div className={styles.elHeader}>
              <a href='/' className={styles.logo}>Gym</a>
              <div className={styles.linksSite}>
                <a href='/sport' className={styles.linkText}>Sport</a>
                <a href='/nutrition' className={styles.linkText}>Nutrition</a>
                <a href='/info' className={styles.linkText}>Info</a>
              </div>
              {
              localStorage.getItem('refresh_token')
              ?
              <div className={styles.iconMenu}>
                <IconButton onClick={openMenu}><AccountCircleOutlinedIcon sx={{color: 'white', fontSize: '25px'}}/></IconButton>
              </div>
              :
              <div className={styles.singIn}>
                <a href='/login'><button className={styles.buttonSingIn}>Sign in</button></a>
              </div>
              }
            </div>
          </header>
          <DropDownMenu />
        </>
    )
}